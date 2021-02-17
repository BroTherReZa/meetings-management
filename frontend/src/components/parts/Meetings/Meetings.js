import React, { useEffect } from "react"
import MeetingsList from "./MeetingsList/MeetingsList"
import { connect } from "react-redux"
import { useHttpClient } from "../../../components/hook/http-hook"

const Meetings = (props) => {
    const { sendRequest } = useHttpClient()

    const meetingCancelHandler = async (mid) => {
        console.log(
            "1",
            props.meetings.filter((item) => item.id === mid)
        )
        try {
            const responseData = await sendRequest(
                `http://localhost:5000/api/meeting/${mid}`,
                "DELETE"
            )
            console.log("ok", responseData)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const fetchMeetings = async () => {
            try {
                const responseData = await sendRequest(
                    "http://localhost:5000/api/meeting"
                )
                console.log("useEffect", responseData.meetings)
                props.getMeetings(responseData.meetings)
                if (props.meetings) {
                    console.log(props.filter)
                    switch (props.filter) {
                        case "today":
                            return
                        case "planned":
                            return
                        case "invited":
                            return
                        case "invitation":
                            props.setMeetings(
                                props.meetings.filter(
                                    (item) => item.creator === props.userId
                                )
                            )
                        default:
                            return
                    }
                } else {
                    console.log("not found any meeting")
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetchMeetings()
    }, [sendRequest])

    return (
        <div className="meetings">
            <MeetingsList
                meetings={props.meetings}
                meetingCancel={meetingCancelHandler}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        meetings: state.meetings,
        userId: state.userId,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMeetings: (meetingsList) =>
            dispatch({ type: "GETMEETINGS", payload: { data: meetingsList } }),
        setMeetings: (list) =>
            dispatch({ type: "SETMEETINGS", payload: { data: list } }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meetings)
