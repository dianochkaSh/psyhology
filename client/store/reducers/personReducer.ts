import { PersonAction, PersonActionTypes, PersonState } from '@/types/person';

const initialState: PersonState = {
  person: [],
  error: ''
}

export const personReducer = (state = initialState, action: PersonAction): PersonState => {
  switch (action.type) {
    case PersonActionTypes.FETCH_PERSON:
      return { error: '', person: action.payload};
    case PersonActionTypes.FETCH_PERSON_ERROR:
      return {...state, error: action.payload}
    default:
      return state;
  }
}