import { FormSignInAction, FormSignInState, FormSignInType } from '@/types/formSignIn';

const initialState : FormSignInState = {
  formSignIn : {
    login: '',
    password: ''
  },
  error : '',
  isAuthenticated: false

}

export const formSignInReducer = (state = initialState, action: FormSignInAction): FormSignInState => {
  switch (action.type) {
    case FormSignInType.CHANGE_VALUE_FIELD_FORM:
      return { ...state, error: '', formSignIn: action.payload };
    case FormSignInType.CLEAR_FIELD:
      return  { ...state, error: '',
        formSignIn:  {
          login: '',
          password: ''
        }
      }
    case FormSignInType.FETCH_SIGN_IN_ERROR:
      return { ...state, error: action.payload }
    case FormSignInType.CLEAR_ERROR: {
      return { ...state, error: '' }
    }
    case FormSignInType.FETCH_SIGN_IN:
      return { ...state, error: '', formSignIn: action.payload}
    case FormSignInType.CHANGE_IS_AUTHENTICATED:
      return {...state, error: '', isAuthenticated: action.payload.isAuthenticated}
    default:
      return  state;
  }
}
