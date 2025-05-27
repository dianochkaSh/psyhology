export interface ICertificate {
  _id: string,
  title: string,
  image: string
}

export interface CertificateState {
  certificates: ICertificate[],
  error: string
}

export enum CertificateActionType {
  FETCH_CERTIFICATE = 'FETCH_CERTIFICATE',
  FETCH_CERTIFICATE_ERROR = 'FETCH_CERTIFICATE_ERROR',
}

interface FetchCertificateAction {
  type: CertificateActionType.FETCH_CERTIFICATE,
  payload: ICertificate[]
}
interface FetchCertificateActionError {
  type: CertificateActionType.FETCH_CERTIFICATE_ERROR,
  payload: string
}

export type CertificateAction = FetchCertificateAction | FetchCertificateActionError;
