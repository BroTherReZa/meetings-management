import * as actionTypes from "../actions/actions";

const initialState = {
  invitation: {
    id: "",
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
    date: "",
    time: "",
    participants: [],
  },
  cantactForm: {
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
  signupForm: {
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
    department: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "واحد سازمانی",
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
        placeholder: "ایمیل",
      },
      value: "",
      vaildation: {
        required: true,
      },
      valid: false,
      used: false,
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "کلمه عبور",
      },
      value: "",
      vaildation: {
        required: true,
      },
      valid: false,
      used: false,
    },
  },
  signinForm: {
    email: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "ایمیل",
      },
      value: "",
      vaildation: {
        required: true,
      },
      valid: false,
      used: false,
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "کلمه عبور",
      },
      value: "",
      vaildation: {
        required: true,
      },
      valid: false,
      used: false,
    },
  },
  loginForm: {
    mobileForm: {
      mobile: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "09...",
        },
        value: "",
        vaildation: {
          required: true,
        },
        valid: false,
        used: false,
      },
    },
    verifyForm: {
      verifyCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "- - - -",
        },
        value: "",
        vaildation: {
          required: true,
        },
        valid: false,
        used: false,
      },
    },
    signUp: {
      verifyCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "- - - -",
        },
        value: "",
        vaildation: {
          required: true,
        },
        valid: false,
        used: false,
      },
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
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ایمیل",
        },
        value: "",
        vaildation: {
          required: true,
        },
        valid: false,
        used: false,
      },
    },
    level: "1",
  },
  participants: [],
  meetings: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INVITATIONINPUTCHANGE:
      return {
        ...state,
        invitation: {
          ...state.invitation,
          form: action.payload.data,
        },
      };
    case actionTypes.SETMEETINGDATE:
      return {
        ...state,
        invitation: {
          ...state.invitation,
          date: action.payload.data,
        },
      };
    case actionTypes.SETMEETINGTIME:
      return {
        ...state,
        invitation: {
          ...state.invitation,
          time: action.payload.data,
        },
      };
    case actionTypes.CONTACTINPUTCHANGE:
      return {
        ...state,
        cantactForm: action.payload.data,
      };
    case actionTypes.SETCONTACT:
      return {
        ...state,
        invitation: {
          ...state.invitation,
          participants: action.payload.data,
        },
      };
    case actionTypes.SIGNUPINPUTCHANGE:
      return {
        ...state,
        signupForm: action.payload.data,
      }
    case actionTypes.SIGNININPUTCHANGE:
      return {
        ...state,
        signinForm: action.payload.data,
      }
    case actionTypes.MOBILECHANGEINPUT:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          mobileForm: action.payload.data,
        },
      };
    case actionTypes.VERIFYCHANGEINPUT:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          verifyForm: action.payload.data,
        },
      };
    case actionTypes.SWITCHFORM:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          level: action.payload.data,
        },
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
