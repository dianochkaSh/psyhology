import { ProblemActionTypes, ProblemState } from '@/types/problem';
import type {ProblemAction} from '@/types/problem';
const initialState: ProblemState = {
  problems: [],
  error : ""
}
export const problemReducer = (state = initialState, action = ProblemAction):ProblemState => {
  switch (action.type){
    case ProblemActionTypes.FETCH_PROBLEM:
      return { error:'', problems:action.payload };
    case ProblemActionTypes.FETCH_PROBLEM_ERROR:
      return { ...state, error: action.payload,}

    default:
      return state;
  }
}