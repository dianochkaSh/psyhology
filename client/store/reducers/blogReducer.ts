import { BlogAction, BlogActionTypes, BlogState } from '@/types/blog';

const initialState: BlogState = {
  posts: [],
  error: '',
  article: {
    _id: '',
    title: '',
    description: '',
    picture: ''
  }
}



export const blogReducer = (state = initialState, action: BlogAction): BlogState => {

  switch (action.type) {
    case BlogActionTypes.FETCH_BLOGS:
      return {...state, error: '', posts: action.payload };
    case BlogActionTypes.FETCH_BLOGS_ERROR:
      return {...state, error:action.payload }
    case BlogActionTypes.FETCH_ONE_ARTICLE:
      return {...state, article: action.payload }
    case BlogActionTypes.FETCH_ONE_ARTICLE_ERROR:
      return {...state, error:action.payload}
    default:
      return state;
  }
}
