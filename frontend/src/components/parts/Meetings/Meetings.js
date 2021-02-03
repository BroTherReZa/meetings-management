import React, { useEffect } from "react"
import MeetingsList from "./MeetingsList/MeetingsList"
import { connect } from "react-redux"
import { useHttpClient } from "../../../components/hook/http-hook"

const Meetings = (props) => {
    const { sendRequest } = useHttpClient()
    useEffect(() => {
        const fetchMeetings = async () => {
            try {
                const responseData = await sendRequest(
                    "http://localhost:5000/api/meeting"
                )
                console.log(responseData.meetings)
                props.getMeetings(responseData.meetings)
            } catch (err) {
                console.log(err)
            }
        }
        fetchMeetings()
    }, [sendRequest])


    const filterMeetingsHandler = (list, filter) => {
        console.log(list, filter)
        if (list) {
            switch (props.filter) {
                case "today":
                    return list
                case "planned":
                    return list
                case "invited":
                    return list
                case "invitation":
                    return list
                default:
                    return list
            }
        } else {
            console.log("not found any meeting")
        }
    }

    return (
        <div className="meetings">
            <MeetingsList
                meetings={filterMeetingsHandler(props.meetings, props.filter)}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        meetings: state.meetings,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMeetings: (meetingsList) =>
            dispatch({ type: "GETMEETINGS", payload: { data: meetingsList } }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meetings)
