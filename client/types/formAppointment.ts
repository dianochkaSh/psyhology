export interface FormAppointment {
  name: string,
  description: string,
  phone: string,
  isNew: boolean
  isWork: boolean,
}

export interface FormAppointmentState {
    formAppointment: FormAppointment
    error: string,
    agreement: boolean
}
export enum FormAppointmentTypes {
  ADD_FORM_APPOINTMENT = 'ADD_FORM_APPOINTMENT',
  ADD_FORM_APPOINTMENT_ERROR = 'ADD_FORM_APPOINTMENT_ERROR',
  EDIT_FIELD = 'EDIT_FIELD',
  CLEAR_FIELD = 'CLEAR_FIELD',
  UPDATE_CHECKBOX = 'UPDATE_CHECKBOX',
  CLEAR_ERROR = 'CLEAR_ERROR'
}

interface UpdateFromAppointmentAction {
  type: FormAppointmentTypes.EDIT_FIELD,
  payload: {
    field: keyof FormAppointment;
    value: any;
  };
}
interface AddFormAppointmentAction {
  type: FormAppointmentTypes.ADD_FORM_APPOINTMENT;
  payload: FormAppointment
}

interface AddFormAppointmentErrorAction {
  type: FormAppointmentTypes.ADD_FORM_APPOINTMENT_ERROR;
  payload: string
}

interface ClearErrorFornAppointment {
  type: FormAppointmentTypes.CLEAR_ERROR
}

interface ClearFormAppointmentAction {
  type: FormAppointmentTypes.CLEAR_FIELD,
  payload: FormAppointment
}
interface UpdateCheckbox {
  type: FormAppointmentTypes.UPDATE_CHECKBOX
  payload: boolean
}

export type FormAppointmentAction  = UpdateFromAppointmentAction |
                                      AddFormAppointmentErrorAction |
                                      AddFormAppointmentAction |
                                      ClearFormAppointmentAction |
                                      UpdateCheckbox |
                                      ClearErrorFornAppointment;
