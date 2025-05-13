import { Dispatch } from 'react';
import axios from 'axios';
import { ProblemAction, ProblemActionTypes } from '@/types/problem';

/*constant*/
import { SERVER_URL } from '@/consts/consts';

export const fetchProblems = () => {
  return async (dispatch: Dispatch<ProblemAction>) => {
    try {
      const response = await axios.get(SERVER_URL + 'problems');
      dispatch({ type: ProblemActionTypes.FETCH_PROBLEM, payload: response.data})

    } catch (e) {
      dispatch({
        type: ProblemActionTypes.FETCH_PROBLEM_ERROR,
        payload: 'Произошла ошибка',
      });
    }
  }
}
