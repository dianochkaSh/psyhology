import { BlogAction, BlogActionTypes, BlogState } from '@/types/blog';

const initialState: BlogState = {
  posts: [],
  error: '',
  article: {
    _id: '',
    title: '',
    description: '',
    picture: ''
  },
  formAddArticle : {
    title: '',
    description: '',
    picture: []
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
      return {...state, error:action.payload};
    case BlogActionTypes.CHANGE_VALUE_ARTICLE:
      const updateItems = Object.entries(state.article).reduce((acc, [key, value]) => {
          return {
            ...acc,
              [key]: (key === action.payload.key) ? action.payload.value : value,
          }
      }, {});
      return {
        ...state,
        article: updateItems
      }
    case BlogActionTypes.EDIT_ARTICLE:
      return {...state, article: action.payload };
    case BlogActionTypes.EDIT_ARTICLE_ERROR:
      return {...state, error: action.payload }
    case BlogActionTypes.ADD_NEW_VALUE_FORM_ARTICLE:
      const formItems = Object.entries(state.formAddArticle).reduce((form, [key, value]) => {
        return {
          ...form,
          [key]: (key === action.payload.key) ? action.payload.value : value,
        }
      }, {});
      return {
        ...state,
        formAddArticle: formItems
      }
    case BlogActionTypes.ADD_ONE_ARTICLE:
      return  {...state, formAddArticle: {}}
    case BlogActionTypes.ADD_ONE_ARTICLE_ERROR: {
      return {...state, error: action.payload}
    }
    default:
      return state;
  }
}
