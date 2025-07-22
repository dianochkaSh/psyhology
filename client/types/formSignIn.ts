
export interface FormSignIn {
  login: string,
  password: string,
}
export interface FormSignInState {
  formSignIn:  FormSignIn,
  error: string,
  isAuthenticated: boolean
}
export enum FormSignInType {
  CHANGE_VALUE_FIELD_FORM = "CHANGE_VALUE_FIELD_FORM",
  CLEAR_FIELD = "CLEAR_FIELD",
  FETCH_SIGN_IN = "FETCH_SIGN_IN",
  FETCH_SIGN_IN_ERROR = "FETCH_SIGN_IN_ERROR",
  CLEAR_ERROR = "CLEAR_ERROR",
  CHANGE_IS_AUTHENTICATED = "CHANGE_IS_AUTHENTICATED"
}
interface  UpdateFieldSignInAction {
  type: FormSignInType.CHANGE_VALUE_FIELD_FORM,
  payload: {
    key: keyof FormSignIn,
    value: string
  }
}

interface ClearFieldSignInAction {
  type:  FormSignInType.CLEAR_FIELD
}

interface ClearFieldErrorSignInAction {
  type: FormSignInType.CLEAR_ERROR
}
 interface CHANGE_VALUE_IS_AUTHENTICATED {
  type: FormSignInType.CHANGE_IS_AUTHENTICATED
  payload : {
    isAuthenticated: boolean
  }
 }
interface SignInFormAction {
  type: FormSignInType.FETCH_SIGN_IN,
  payload: FormSignIn
}
interface SignInFormActionError {
  type: FormSignInType.FETCH_SIGN_IN_ERROR,
  payload: string
}

export type FormSignInAction = UpdateFieldSignInAction |
                                ClearFieldSignInAction |
                                SignInFormAction |
                                SignInFormActionError |
                                CHANGE_VALUE_IS_AUTHENTICATED |
                                ClearFieldErrorSignInAction;
