import { PersonAction, PersonActionTypes, PersonState } from '@/types/person';

const initialState: PersonState = {
  person: {
    _id: '',
    name: '',
    education: '',
    description: '',
    photo: '',
    phone: '',
    format_consultation: '',
    time_consultation: ''
  },
  error: '',
  isShowEditFields: false,
  formEditPerson: {
    _id: '',
    name: '',
    description: '',
    phone: '',
    time_consultation: '',
    format_consultation: '',
    education: ''
  }
}

export const personReducer = (state = initialState, action: PersonAction): PersonState => {
  switch (action.type) {
    case PersonActionTypes.FETCH_PERSON:
      return {...state,  error: '', person: action.payload};
    case PersonActionTypes.FETCH_PERSON_ERROR:
      return {...state, error: action.payload }
    case PersonActionTypes.IS_SHOW_EDIT_FORM:
      return { ...state, isShowEditFields: action.payload.isShowEditFields}
    case PersonActionTypes.EDIT_FIELDS:
      const updatedItems = Object.entries(state.formEditPerson).reduce((acc, [key, value]) => {
        return {
          ...acc,
          [key]: (key === action.payload.key) ?  action.payload.value : value,
        };
      }, {});
      return  {
         ...state,
        formEditPerson: updatedItems
      }
    case PersonActionTypes.GET_PERSON_INFORMATION:
      return  {... state, formEditPerson: action.payload }
    case PersonActionTypes.SUBMIT_FORM_UPDATE:
      return {... state, isShowEditFields: false }
    default:
      return state;
  }
}