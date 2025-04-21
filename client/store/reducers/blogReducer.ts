import { BlogAction, BlogActionTypes, BlogState } from '@/types/blog';

const initialState: BlogState = {
  posts: [],
  error: ''
}



export const blogReducer = (state = initialState, action: BlogAction): BlogState => {

  switch (action.type) {
    case BlogActionTypes.FETCH_BLOGS:
      return {error: '', posts: action.payload };
    case BlogActionTypes.FETCH_BLOGS_ERROR:
      return {...state, error:action.payload}
    default:
      return state;
  }
}
