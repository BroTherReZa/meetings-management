import React from 'react'
import { checkValidation } from '../../../utils/Validators/Validators'
import { connect } from 'react-redux'
import './Signup.css'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'


const Signup = (props) => {
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
    
    const signupHandler = (event) => {
        event.preventDefault()
        console.log(props.signupForm)

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