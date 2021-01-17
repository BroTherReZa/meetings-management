import * as actionTypes from "../actions/actions";

const initialState = {
  form: {
    subject: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "موضوع جلسه",
      },
      value: "",
      vaildation: {
        required: true,
      },
      valid: false,
      used: false,
    },
    minute: {
      elementType: "textarea",
      elementConfig: {
        type: "text",
        placeholder: "دستور جلسه",
      },
      value: "",
      vaildation: {
        required: true,
      },
      valid: false,
      used: false,
    },
    meetingRoom: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "محل جلسه",
      },
      value: "",
      vaildation: {
        required: true,
      },
      valid: false,
      used: false,
    },
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INPUTCHANGE:
      return {
          ...state,
          form : action.data
      }
    default:
      break
  }
  return state
};

export default reducer