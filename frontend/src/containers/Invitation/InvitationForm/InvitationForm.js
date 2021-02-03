import React from "react"
import Wrapper from "../../../components/hoc/Wrapper"
import Input from "../../../components/UI/Input/Input"
import Button from "../../../components/UI/Button/Button"
import { connect } from "react-redux"
import { DatePicker } from "jalali-react-datepicker"
import SearchParticipants from "../../../components/parts/Participants/SearchParticipants/SearchParticipants"
import "./InvitationForm.css"
import ParticipantsList from "../../../components/parts/Participants/ParticipantsList/ParticipantsList"
import axios from "../../../utils/Database/axios-firebase"
import { checkValidation } from "../../../utils/Validators/Validators"
import NewParticipants from "../../../components/parts/Participants/NewParticipants/NewParticipants"
import { ShamsiDateFormat } from "../../../utils/DateFormat/ShamsiDateFormat"
import { v4 as uuidv4 } from "uuid"
import { useHttpClient } from "../../../components/hook/http-hook"

const InvitationForm = (props) => {
    const { sendRequest } = useHttpClient()
    const elementsArray = []
    for (let item in props.invitation.form) {
        elementsArray.push({
            id: item,
            config: props.invitation.form[item],
        })
    }

    const setMeetingDateHandler = ({ value }) => {
        const { jDate, jTime, isValidDateTime } = ShamsiDateFormat(value)
        if (isValidDateTime) {
            //console.log("date:", jDate, "time:", jTime);
            props.setMeetingDate(jDate) // need to update
            props.setMeetingTime(jTime) // need to update
        }
    }

    const inputChangeHandler = (event, inputElement) => {
        const updatedForm = {
            ...props.invitation.form,
        }
        const updatedElement = { ...updatedForm[inputElement] }
        updatedElement.value = event.target.value
        updatedElement.valid = checkValidation(
            updatedElement.value,
            updatedElement.vaildation
        )
        updatedElement.used = true
        updatedForm[inputElement] = updatedElement
        props.onChangeInput(updatedForm)
    }

    const addNewContactHandler = (newContact) => {
        const updatedParticipants = [...props.invitation.participants]
        updatedParticipants.push(newContact)
        props.setContact(updatedParticipants)
        //console.log(props.invitation.participants)
    }

    const invitationSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            const responseData = await sendRequest(
                "http://localhost:5000/api/meeting",
                "POST",
                JSON.stringify({
                    subject: props.invitation.form.subject.value,
                    host: props.invitation.form.host.value,
                    minute: props.invitation.form.minute.value,
                    meetingRoom: props.invitation.form.room.value,
                    meetingRoomAddress: props.invitation.form.roomAddress.value,
                    meetingDate: props.invitation.date,
                    meetingTime: props.invitation.time,
                    participants: props.invitation.participants,
                    creator: "601a9e92e835486f65067932",
                }),
                { "Content-Type": "application/json" }
            )
        } catch (err) {
            console.log(err)
        }

        // const meeting = {
        //     meetingId: uuidv4(),
        //     subject: props.invitation.form.subject.value,
        //     host: props.invitation.form.host.value,
        //     minute: props.invitation.form.minute.value,
        //     meetingRoom: props.invitation.form.room.value,
        //     meetingRoomAddress: props.invitation.form.roomAddress.value,
        //     meetingDate: props.invitation.date,
        //     meetingTime: props.invitation.time,
        //     participants: props.invitation.participants,
        // }
        // axios
        //     .post("/meetings.json", meeting)
        //     .then((res) => {
        //         console.log("ok", res)
        //         props.history.push("/invitation")
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
    }

    return (
        <Wrapper>
            <div className="invitation">
                <h1>فرم دعوت به جلسه</h1>
                <form onSubmit={invitationSubmitHandler}>
                    <DatePicker
                        label="تاریخ و ساعت جلسه :"
                        onClickSubmitButton={setMeetingDateHandler}
                    />
                    {elementsArray.map((item) => (
                        <Input
                            key={item.id}
                            inputType={item.config.elementType}
                            elementConfig={item.config.elementConfig}
                            value={item.config.value}
                            invalid={!item.config.valid}
                            used={item.config.used}
                            change={(event) =>
                                inputChangeHandler(event, item.id)
                            }
                        />
                    ))}
                    <SearchParticipants />
                    <NewParticipants submit={addNewContactHandler} />
                    <Button btnType="form">تنظیم جلسه</Button>
                </form>
                <ParticipantsList list={props.invitation.participants} />
            </div>
        </Wrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        invitation: state.invitation,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeInput: (updatedForm) =>
            dispatch({
                type: "INVITATIONINPUTCHANGE",
                payload: { data: updatedForm },
            }),
        setMeetingDate: (meetingDate) =>
            dispatch({
                type: "SETMEETINGDATE",
                payload: { data: meetingDate },
            }),
        setMeetingTime: (meetingTime) =>
            dispatch({
                type: "SETMEETINGTIME",
                payload: { data: meetingTime },
            }),
        setContact: (updatedParticipants) =>
            dispatch({
                type: "SETCONTACT",
                payload: { data: updatedParticipants },
            }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InvitationForm)
