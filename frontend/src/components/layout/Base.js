import React from "react"
import Signin from "../../containers/Account/Signin/Signin"
import Signup from "../../containers/Account/Signup/Signup"
import Recovery from '../../containers/Account/Recovery/Recovery'
import Button from "../UI/Button/Button"
import { connect } from "react-redux"

import "./Base.css"

const Base = (props) => {
    const baseSwitchFromHandler = () => {
        if (props.recoveryForm.level === "0") {
            if (props.baseForm) {
                return <Signin />
            } else {
                return <Signup />
            }
        } else {
            return <Recovery />
        }
    }
    const switchModeHandler = () => {
        props.onChangeLevel("0")
        props.setBaseForm(!props.baseForm)
    }
    const recoveryModeHandler = () => {
        props.onChangeLevel("1")
    }

    return (
        <div className="base">
            {baseSwitchFromHandler()}
            <Button btnType="mode" click={switchModeHandler}>
                {props.baseForm ? "ثبت نام" : "ورود به سامانه "}
            </Button>
            <Button btnType="mode" click={recoveryModeHandler}>
                بازیابی کلمه عبور
            </Button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        baseForm: state.baseForm,
        recoveryForm: state.recoveryForm,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setBaseForm: (mode) =>
            dispatch({
                type: "SETBASEFORM",
                payload: { data: mode },
            }),
        onChangeLevel: (newLevel) =>
            dispatch({ type: "SWITCHFORM", payload: { data: newLevel } }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Base)
