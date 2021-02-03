import React from 'react'
import { checkValidation } from '../../../utils/Validators/Validators'
import { connect } from 'react-redux'
import './Signup.css'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import { useHttpClient } from '../../../components/hook/http-hook'


const Signup = (props) => {

    const { sendRequest } = useHttpClient()
    
    const elementsArray = []
    for (let item in props.signupForm){
        elementsArray.push({
            id: item,
            config: props.signupForm[item]
        })
    }


    const inputChangeHandler = (event, inputElement) => {
        const updatedForm = {
          ...props.signupForm,
        };
        const updatedElement = { ...updatedForm[inputElement] };
        updatedElement.value = event.target.value;
        updatedElement.valid = checkValidation(
          updatedElement.value,
          updatedElement.vaildation
        );
        updatedElement.used = true;
        updatedForm[inputElement] = updatedElement;
        props.onChangeInput(updatedForm);
    };
    
    const signupHandler = async (event) => {
        event.preventDefault()

        try {
            // const formData = new FormData()
            // formData.append('name',props.signupForm.name.value)
            // formData.append('department',props.signupForm.department.value)
            // formData.append('email',props.signupForm.email.value)
            // formData.append('password',props.signupForm.password.value)
            const responseData = await sendRequest(
                'http://localhost:5000/api/user/signup',
                'POST',
                JSON.stringify({
                    name: props.signupForm.name.value,
                    department: props.signupForm.department.value,
                    email: props.signupForm.email.value,
                    password: props.signupForm.password.value
                }),
                {'Content-Type': 'application/json'}
                 
            )
            console.log('send', responseData)
        } catch (err) {
            console.log(err)
        }



        // try {
        //     const response = await fetch('http://localhost:5000/api/user/signup', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             name: props.signupForm.name.value,
        //             department: props.signupForm.department.value,
        //             email: props.signupForm.email.value,
        //             password: props.signupForm.password.value
        //         })
        //     })
        //     const responseData = await response.json()
        //     if(!response.ok){
        //         throw new Error(responseData.message)
        //     }
        //     console.log(responseData)
        //     auth.login()
        // } catch (err) {
        //     console.log(err)
        // }

    }

    return(
            <div className="signup">
                <h2>ثبت نام</h2>
               <form onSubmit={signupHandler}>
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
                
                    <Button btnType="form" >ثبت نام</Button>
                </form>
            </div>

    )
}

const mapStateToProps = (state) => {
    return {
        signupForm: state.signupForm
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeInput: (updatedForm) => dispatch({ type: "SIGNUPINPUTCHANGE", payload: { data: updatedForm }})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)