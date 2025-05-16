import { Dispatch } from 'react';
import { PersonAction, PersonActionTypes } from '@/types/person';
import axios from 'axios';
import { SERVER_URL } from '@/consts/consts';

export const fetchPerson = () => {
 return async (dispatch: Dispatch<PersonAction>) => {
   try {
     const response = await axios.get(SERVER_URL + 'person');
     dispatch({ payload: response.data, type: PersonActionTypes.FETCH_PERSON });
   } catch (e) {
     dispatch({ type: PersonActionTypes.FETCH_PERSON_ERROR, payload: 'Произошла ошибка'})
   }
 }
}