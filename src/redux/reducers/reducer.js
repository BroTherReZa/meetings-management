import * as actionTypes from "../actions/actions";

const initialState = {
  invitationForm: {
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
  participants: {
    name: "",
    position: "",
    state: "", // waiting, agree, reject
    email: "",
    mobile: "",
  },
  meeting:{
    subject: '',
    minute: '',
    meetingRoom:'',
    meetingDate: '',
    participants: []
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INPUTCHANGE:
      return {
        ...state,
        invitationForm: action.payload.data,
      };
    case actionTypes.SETDATE:
      return{
        ...state,
        meeting: action.payload.data
      }
    case actionTypes.SETMEETING:
      return {
        ...state,
        meeting: action.payload.data
      }
    default:
      break;
  }
  return state;
};

export default reducer;
