import axios from 'axios';
import { CertificateAction, CertificateActionType } from '@/types/certificate';
import { Dispatch } from 'react';

/*constant*/
import { SERVER_URL } from '@/consts/consts';


export const fetchCertificate = () => {
  return async (dispatch: Dispatch<CertificateAction>) => {
    try {
      const response = await  axios.get(SERVER_URL + 'certificate');
      dispatch({ type: CertificateActionType.FETCH_CERTIFICATE, payload: response.data });
    } catch (e) {
      dispatch({
        type:CertificateActionType.FETCH_CERTIFICATE_ERROR,
        payload: 'Произошла ошибка',
      })
    }
  }
}