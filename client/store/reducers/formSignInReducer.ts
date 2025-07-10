import { FormSignInAction, FormSignInState, FormSignInType } from '@/types/formSignIn';

const initialState : FormSignInState = {
  formSignIn : {
    login: '',
    password: ''
  },
  error : ''

}

export const formSignInReducer = (state = initialState, action: FormSignInAction): FormSignInState => {
  switch (action.type) {
    case FormSignInType.CHANGE_VALUE_FIELD_FORM:
      return { error: '', formSignIn: action.payload };
    case FormSignInType.CLEAR_FIELD:
      return  { error: '',
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
      return { error: '', formSignIn: action.payload}
    default:
      return  state;
  }
}
