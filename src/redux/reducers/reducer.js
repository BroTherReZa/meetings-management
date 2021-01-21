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
    host: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "میزبان جلسه",
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
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "نام و نام خانوادگی",
      },
      value: "",
      vaildation: {
        required: true,
      },
      valid: false,
      used: false,
    },
    position: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "پست سازمانی",
      },
      value: "",
      vaildation: {
        required: true,
      },
      valid: false,
      used: false,
    },
    email: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "آدرس ایمیل",
      },
      value: "",
      vaildation: {
        required: true,
      },
      valid: false,
      used: false,
    },
    mobile: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "شماره تلفن همراه",
      },
      value: "",
      vaildation: {
        required: true,
      },
      valid: false,
      used: false,
    },
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
