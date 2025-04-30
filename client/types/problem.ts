export interface IProblem{
  _id: string,
  title: string,
  description: string,
  picture: string
}
export interface ProblemState {
  problems: IProblem[],
  error: string
}

export enum ProblemActionTypes {
  FETCH_PROBLEM = 'FETCH_PROBLEM',
  FETCH_PROBLEM_ERROR = 'FETCH_PROBLEM_ERROR',
}

interface FetchProblemAction {
  type: ProblemActionTypes.FETCH_PROBLEM;
  payload: IProblem[]
}

interface FetchProblemActionError {
  type: ProblemActionTypes.FETCH_PROBLEM_ERROR;
  payload: string
}

export type ProblemAction = FetchProblemAction | FetchProblemActionError;
