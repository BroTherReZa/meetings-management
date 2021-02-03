import React, { useContext } from "react"
import { checkValidation } from "../../../utils/Validators/Validators"
import { connect } from "react-redux"
import "./Signin.css"
import Input from "../../../components/UI/Input/Input"
import Button from "../../../components/UI/Button/Button"
import { AuthContext } from '../../../components/context/auth-context' 

const Signin = (props) => {
    const auth = useContext(AuthContext)
    const elementsArray = []
    for (let item in props.signinForm) {
        elementsArray.push({
            id: item,
            config: props.signinForm[item],
        })
    }

    const inputChangeHandler = (event, inputElement) => {
        const updatedForm = {
            ...props.signinForm,
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

    const signinHandler = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/user/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: props.signupForm.email.value,
                    password: props.signupForm.password.value
                })
            })
            const responseData = await response.json()
            if(!response.ok){
                throw new Error(responseData.message)
            }
            auth.login()
        } catch (err) {
            console.log(err)
        }
        
    }
    return (
        <div className="signin">
            <h2>ورود به سامانه</h2>
            <form onSubmit={signinHandler}>
                {elementsArray.map((item) => (
                    <Input
                        key={item.id}
                        inputType={item.config.elementType}
                        elementConfig={item.config.elementConfig}
                        value={item.config.value}
                        invalid={!item.config.valid}
                        used={item.config.used}
                        change={(event) => inputChangeHandler(event, item.id)}
                    />
                ))}

                <Button btnType="form">ورود</Button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        signinForm: state.signinForm,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeInput: (updatedForm) =>
            dispatch({
                type: "SIGNININPUTCHANGE",
                payload: { data: updatedForm },
            }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin)
