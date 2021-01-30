import React from "react";
import { connect } from "react-redux";
import Mobile from './parts/mobile'

import "./Login.css";

const Login = (props) => {

const formSwitchHandler = () => {
    switch(props.loginForm.level){
        case '1':
            return <Mobile clicked={mobileSubmitHandler}/>
        case '2':
            return <h1>form 2</h1>
    }
}



  const mobileSubmitHandler = (event) => {
      event.preventDefault()
    props.onChangeLevel("2")
  }
  return (
    <div className="login">
      <h1>ورود یا ثبت نام</h1>
      <form>
       {formSwitchHandler()} 
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loginForm: state.loginForm,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onChangeLevel: (newLevel) => dispatch({ type: "SWITCHFORM", payload: {data: newLevel}}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
