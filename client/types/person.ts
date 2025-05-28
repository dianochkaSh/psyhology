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

export interface PersonState {
  person: IPerson[],
  error: string
}

export enum PersonActionTypes {
  FETCH_PERSON = 'FETCH_PERSON',
  FETCH_PERSON_ERROR = 'FETCH_PERSON_ERROR',
}

interface FetchPersonAction {
  payload: IPerson,
  type: PersonActionTypes.FETCH_PERSON
}

interface FetchPersonActionError {
  payload: string,
  type: PersonActionTypes.FETCH_PERSON_ERROR
}

export type PersonAction = FetchPersonAction | FetchPersonActionError;
