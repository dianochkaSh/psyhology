import axios from 'axios';
import { Dispatch } from 'react';

/* constant */
import { SERVER_URL } from '@/consts/consts';

/* types */
import { FormAppointment, FormAppointmentAction, FormAppointmentTypes } from '@/types/formAppointment';

export const addAppointment = (data:FormAppointment) => {
 return async (dispatch: Dispatch<FormAppointmentAction>) => {
    try {
      const response = await axios.post(SERVER_URL + 'treatment', data);
      dispatch({ type: FormAppointmentTypes.ADD_FORM_APPOINTMENT,  payload: response.data });
      clearFieldForm();
    }catch (e) {
      dispatch({
        type: FormAppointmentTypes.ADD_FORM_APPOINTMENT_ERROR,
        payload: e.message,
      });
    }

  }
}
export const updateFieldForm = (field:string, value:string) => {

  return {
    type: FormAppointmentTypes.EDIT_FIELD,
    payload: {field, value}
  };
}
export const clearFieldForm = () => {
  return {
    type: FormAppointmentTypes.CLEAR_FIELD
  }
}
export const handleCheckboxAction = (value:boolean) => {
  return {
    type: FormAppointmentTypes.UPDATE_CHECKBOX,
    payload: value
  }
}

export const clearErrorFormAppointment = () => {
  return {
    type: FormAppointmentTypes.CLEAR_ERROR
  }
}

