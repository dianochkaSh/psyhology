export interface IPerson {
  _id: string,
  name: string,
  education: string,
  description: string,
  photo: string,
  phone: string,
  format_consultation: string,
  time_consultation: string
}
export interface IFormPerson {
  name: string,
  education: string,
  description: string,
  phone: string,
  format_consultation: string,
  time_consultation: string,
  _id: string,
}

export interface PersonState {
  person: IPerson,
  error: string,
  isShowEditFields: boolean,
  formEditPerson: IFormPerson
}

export enum PersonActionTypes {
  FETCH_PERSON = 'FETCH_PERSON',
  FETCH_PERSON_ERROR = 'FETCH_PERSON_ERROR',
  IS_SHOW_EDIT_FORM = 'IS_SHOW_EDIT_FORM',
  EDIT_FIELDS = 'EDIT_FIELDS',
  SUBMIT_FORM_UPDATE = 'SUBMIT_FORM_UPDATE',
  SUBMIT_FORM_UPDATE_ERROR = 'SUBMIT_FORM_UPDATE_ERROR',
  GET_PERSON_INFORMATION = 'GET_PERSON_INFORMATION',
}

interface FetchPersonAction {
  payload: IPerson,
  type: PersonActionTypes.FETCH_PERSON
}
interface EditFieldsAction {
  type: PersonActionTypes.EDIT_FIELDS,
  payload: {
    key: keyof IFormPerson,
    value: any
  }
}
interface SubmitFormAction {
  type: PersonActionTypes.SUBMIT_FORM_UPDATE,
  payload: IFormPerson
}
interface SubmitFormErrorAction {
  type: PersonActionTypes.SUBMIT_FORM_UPDATE_ERROR,
  payload: string
}

interface FetchPersonActionError {
  payload: string,
  type: PersonActionTypes.FETCH_PERSON_ERROR
}
interface  ShowEditFormAction {
  type: PersonActionTypes.IS_SHOW_EDIT_FORM,
  payload:  {
    isShowEditFields: boolean
  }
}
interface GetPersonInformationForFormAction {
  type: PersonActionTypes.GET_PERSON_INFORMATION,
  payload: IFormPerson
}

export type PersonAction =  FetchPersonAction |
                            FetchPersonActionError |
                            ShowEditFormAction |
                            SubmitFormAction |
                            SubmitFormErrorAction |
                            GetPersonInformationForFormAction |
                            EditFieldsAction;
