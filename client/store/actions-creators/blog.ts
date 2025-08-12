import { Dispatch } from 'react';
import { BlogAction, BlogActionTypes, IBlog } from '@/types/blog';
import axios from 'axios';

/* constant */
import { SERVER_URL } from '@/consts/consts';

export const fetchBlog = (countEl:number ) => {
  return async (dispatch: Dispatch<BlogAction>) => {
    try {
      const response = await axios.get( SERVER_URL + 'blogs' + "?count=" + countEl);
      dispatch({ type: BlogActionTypes.FETCH_BLOGS, payload: response.data });
    } catch (e: unknown) {
      if(e instanceof  Error)
      {
        dispatch({
          type: BlogActionTypes.FETCH_BLOGS_ERROR,
          payload: 'Произошла ошибка',
        });
      }
    }
  };
};

export const getOneArticle = (id: string) => {

  return async (dispatch: Dispatch<BlogAction>) => {
    try  {
      const response = await axios.get(SERVER_URL + 'blogs/'  + id);
      dispatch({ type: BlogActionTypes.FETCH_ONE_ARTICLE, payload: response.data})
    }
    catch (e) {
      dispatch({
        type: BlogActionTypes.FETCH_ONE_ARTICLE_ERROR,
        payload: e.message
      })
    }
  }

}
export const updateArticle = (article: IBlog) => {
  return async (dispatch: Dispatch<BlogAction>) => {
    try {
      const response = await axios.put(SERVER_URL + 'blogs/' + article._id, article);
      console.log('response');
      console.log(response);
      dispatch({ type: BlogActionTypes.EDIT_ARTICLE, payload: response});
    }
    catch (e: unknown) {
      if(e instanceof Error) {
        dispatch({ type: BlogActionTypes.EDIT_ARTICLE_ERROR, payload: e.message  })
      }
    }
  }
}
export const changeValueArticle = (key: string, value: string) => {
  return {
    type: BlogActionTypes.CHANGE_VALUE_ARTICLE,
    payload: {
      key: key,
      value: value
    }
  }
}
export const addNewValueToForm = (key: string, value: any) => {
  return {
    type: BlogActionTypes.ADD_NEW_VALUE_FORM_ARTICLE,
    payload: {
      key: key,
      value: value
    }
  }
}
export const addArticle = (formAdd) => {

  return async (dispatch: Dispatch<BlogAction>) =>{
   try {
     const response = await axios.post(SERVER_URL + 'blogs/' , formAdd);
     dispatch({
       type: BlogActionTypes.ADD_ONE_ARTICLE,
       payload: { successAdd: true }
     });

   } catch (e : unknown) {
    if(e instanceof Error ) {
      dispatch( {
        type: BlogActionTypes.ADD_ONE_ARTICLE_ERROR,
        payload: e.message
      });
    }
   }
  }
}
export const errorValidationError = (field: string) => {
  return {
    type: BlogActionTypes.SHOW_ERROR,
    payload: (!field) ? '' : 'Введите значения в поле: '+ field
  }
}

export const showModalWindowDelete = (value:boolean) => {
  return {
    type: BlogActionTypes.SHOW_MODAL_DELETE_ARTICLE,
    payload:  { isShowModalDelete : value  }
  }
}

export const deleteOneArticle = (id: string) => {
  return async (dispatch: Dispatch<BlogAction>) => {
    try {
      const response = await axios.delete(SERVER_URL + 'blogs/' + id);
      dispatch ({
        type: BlogActionTypes.DELETE_ONE_ARTICLE,
        payload:  { isShowModalDelete: false  }
      });
    }  catch (e: unknown) {
      if(e instanceof  Error){
        dispatch({
          type: BlogActionTypes.DELETE_ONE_ARTICLE_ERROR,
          payload:e.message
        })
      }

    }
  }


}
