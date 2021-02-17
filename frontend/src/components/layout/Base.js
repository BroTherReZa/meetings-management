import React from "react"
import Signin from "../../containers/Account/Signin/Signin"
import Signup from "../../containers/Account/Signup/Signup"
import Button from "../UI/Button/Button"
import { connect } from "react-redux"

import "./Base.css"

const Base = (props) => {
    const switchModeHandler = (prevMode) => {
        props.setBaseForm(!props.baseForm)
    }

    return (
        <div className="base">
            {props.baseForm ? <Signin /> : <Signup />}
            <Button btnType="mode" click={switchModeHandler}>
                {props.baseForm ? "ثبت نام" : "ورود"}
            </Button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        baseForm: state.baseForm,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setBaseForm: (mode) =>
            dispatch({
                type: "SETBASEFORM",
                payload: { data: mode },
            }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Base)
