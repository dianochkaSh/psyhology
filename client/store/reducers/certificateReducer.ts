import { CertificateAction, CertificateActionType, CertificateState } from '@/types/certificate';

const initialState: CertificateState = {
  certificates: [],
  error: ''
}

export const certificateReducer = (state = initialState, action: CertificateAction): CertificateState => {
  switch (action.type) {
    case CertificateActionType.FETCH_CERTIFICATE:
      return { error: '', certificates:action.payload}
    case CertificateActionType.FETCH_CERTIFICATE_ERROR:
      return {...state, error:action.payload, }
    default:
      return  state
  }
}
