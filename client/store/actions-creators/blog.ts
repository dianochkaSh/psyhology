import { Dispatch } from 'react';
import { BlogAction, BlogActionTypes } from '@/types/blog';
import axios from 'axios';

/*constant*/
import { SERVER_URL } from '@/consts/consts';

export const fetchBlog = (countEl:number) => {
  return async (dispatch: Dispatch<BlogAction>) => {
    try {
      const response = await axios.get( SERVER_URL + 'blogs' + "?count=" + countEl);
      dispatch({ type: BlogActionTypes.FETCH_BLOGS, payload: response.data });
    } catch (e) {
      dispatch({
        type: BlogActionTypes.FETCH_BLOGS_ERROR,
        payload: 'Произошла ошибка',
      });
    }
  };
};
