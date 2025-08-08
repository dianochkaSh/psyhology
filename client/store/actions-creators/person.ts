import { Dispatch } from 'react';
import { IFormPerson, PersonAction, PersonActionTypes } from '@/types/person';
import axios from 'axios';
import { SERVER_URL } from '@/consts/consts';

export const fetchPerson = () => {
 return async (dispatch: Dispatch<PersonAction>) => {
   try {
     const response = await axios.get(SERVER_URL + 'people');

     dispatch({ payload: response.data[0], type: PersonActionTypes.FETCH_PERSON });
   } catch (e: unknown) {
     if(e instanceof Error) {
       dispatch({ type: PersonActionTypes.FETCH_PERSON_ERROR, payload: 'Произошла ошибка' });
     }
   }
 }
}
export const changeEditForm = (isShowEditForm: boolean) => {
 return {
    type: PersonActionTypes.IS_SHOW_EDIT_FORM,
    payload:  { isShowEditFields: isShowEditForm}
  }
}
export const changeFieldsForm = (key: string, value: string, ) => {
  return {
    type: PersonActionTypes.EDIT_FIELDS,
    payload: {
      key: key,
      value:  value
    }
  }
}
export  const fullDateFormEditPerson = (person: any) => {
  return {
    type: PersonActionTypes.GET_PERSON_INFORMATION,
    payload: person,
  }
}
export const sendDateEditPerson = (person: IFormPerson) => {
  return async (dispatch: Dispatch<PersonAction>) => {
    try {
      const response = await axios.put(SERVER_URL + 'people/'+ person._id, person);
      dispatch({ payload: response.data, type: PersonActionTypes.SUBMIT_FORM_UPDATE });
    } catch (e: unknown) {
      if(e instanceof Error) {
        dispatch({ type: PersonActionTypes.SUBMIT_FORM_UPDATE_ERROR, payload: 'Произошла ошибка' });
      }

    }
  }
}
