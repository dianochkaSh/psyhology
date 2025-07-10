import { FormAppointmentAction, FormAppointmentState, FormAppointmentTypes } from '@/types/formAppointment';

const initialState : FormAppointmentState = {
  formAppointment: {
    name: '',
    description: '',
    phone: '',
    isNew: false,
    isWork: false
  },
  agreement: false,
  error: ''
}
export const formAppointmentReducer = (state = initialState, action: FormAppointmentAction): FormAppointmentState => {

  switch(action.type) {
    case FormAppointmentTypes.ADD_FORM_APPOINTMENT:
      return { ...state, error: '', formAppointment: action.payload };
    case FormAppointmentTypes.ADD_FORM_APPOINTMENT_ERROR:
      return {...state, error: action.payload }
    case FormAppointmentTypes.EDIT_FIELD:
      return { ...state, formAppointment: action.payload }
    case FormAppointmentTypes.CLEAR_FIELD:
      return { ...state,
       formAppointment : {
          name: '',
          description: '',
          phone: '',
          isNew: false,
          isWork: false
        }
      }
    case FormAppointmentTypes.UPDATE_CHECKBOX :
      return {... state, agreement: action.payload }
    case FormAppointmentTypes.CLEAR_ERROR :
      return  { ... state, error: ''}
    default:
      return state;

  }
}
