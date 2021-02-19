import React from "react";
import { connect } from "react-redux";
import Mobile from './parts/Mobile'
import Verify from "./parts/Verify";

const Recovery = (props) => {

const formSwitchHandler = () => {
    switch(props.recoveryForm.level){
        case '1':
            return <Mobile clicked={mobileSubmitHandler}/>
        case '2':
            return <Verify clicked={verifySubmitHandler} mobileNumber={props.recoveryForm.mobileForm.mobile.value} />
        case '3':
            return <h1> login successfuly</h1>
    }
}



  const mobileSubmitHandler = (event) => {
      event.preventDefault()
    props.onChangeLevel("2")
  }
  const verifySubmitHandler = (event) => {
    event.preventDefault()
  props.onChangeLevel("3")
}
  return (
    <div className="login">
      <form>
       {formSwitchHandler()} 
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    recoveryForm: state.recoveryForm,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onChangeLevel: (newLevel) => dispatch({ type: "SWITCHFORM", payload: {data: newLevel}}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Recovery);
