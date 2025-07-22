import { Dispatch } from 'react';
import axios from 'axios';

/* types */
import { FormSignIn, FormSignInAction, FormSignInType } from '@/types/formSignIn';

/* const */
import { SERVER_URL } from '@/consts/consts';

export const clearFieldSignIn = () => {
  return { type: FormSignInType.CLEAR_FIELD};
}

export const updateFieldValueSignIn = (field: string, value: string) => {
  return {
    type: FormSignInType.CHANGE_VALUE_FIELD_FORM,
    payload:  { field : value }
  }
}
export const ClearFieldErrorSignInAction = () => {
  return {
    type: FormSignInType.CLEAR_ERROR
  }
}

export const signIn = (data: FormSignIn) => {
  return async (dispatch: Dispatch<FormSignInAction>) => {
    try {
      const response = await axios.post(SERVER_URL + 'auth/login', data);
      localStorage.setItem('access_token', response.data.access_token)
      dispatch({ type: FormSignInType.FETCH_SIGN_IN, payload: response.data});

    } catch (e) {
      dispatch({
        type: FormSignInType.FETCH_SIGN_IN_ERROR,
        payload: e.message
      })
    }

  }
}
export const updateValueIsAuthenticated = (isAuth: boolean) => {
  return {
    type: FormSignInType.CHANGE_IS_AUTHENTICATED,
    payload: {  isAuthenticated: isAuth }
  }
}
export const logoutUser = () => {
  const token = window.localStorage.getItem("access_token");
  return async (dispath: Dispatch<FormSignInAction>) => {
    try {
      const response = await axios.post(SERVER_URL + 'auth/logout', data);

      dispath({
        type: FormSignInType.CHANGE_IS_AUTHENTICATED,
        payload: {
          isAuthenticated: false
        }
      })
    }
    catch (e) {

    }
  }
}
