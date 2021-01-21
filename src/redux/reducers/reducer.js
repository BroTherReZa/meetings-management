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
    room: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "محل برگزاری",
      },
      value: "",
      vaildation: {
        required: true,
      },
      valid: false,
      used: false,
    },
    roomAddress: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "آدرس محل برگزاری",
      },
      value: "",
      vaildation: {
        required: true,
      },
      valid: false,
      used: false,
    },
  },
  meetingDate: {},
  participants: {
    name: "",
    position: "",
    state: "", // waiting, agree, reject
    email: "",
    mobile: "",
  },
  meetings: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INPUTCHANGE:
      return {
        ...state,
        invitationForm: action.payload.data,
      };
    case actionTypes.SETDATE:
      return {
        ...state,
        meetingDate: action.payload.data,
      };
    case actionTypes.SETMEETING:
      return {
        ...state,
        meeting: action.payload.data,
      };
    case actionTypes.GETMEETINGS:
      return {
        ...state,
        meetings: action.payload.data,
      };
    default:
      break;
  }
  return state;
};

export default reducer;
