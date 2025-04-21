import { Dispatch } from 'react';
import { BlogAction, BlogActionTypes } from '@/types/blog';
import axios from 'axios';
import { SERVER_URL } from '@/consts/consts';

export const fetchBlog = () => {

  return async (dispatch: Dispatch<BlogAction>) => {
    try {
      console.log('url');
      console.log(SERVER_URL + '/blogs');
      const response = await axios.get( SERVER_URL + 'blogs');
      dispatch({ type: BlogActionTypes.FETCH_BLOGS, payload: response.data });
    } catch (e) {
      dispatch({
        type: BlogActionTypes.FETCH_BLOGS_ERROR,
        payload: 'Произошла ошибка',
      });
    }
  };
};
