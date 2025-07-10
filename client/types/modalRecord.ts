
export interface ModalRecordState {
  isOpen: boolean,
  isOpenNotification: boolean
  isOpenSignUpWindow: boolean
}

export enum ModalRecordTypes {
  MODAL_OPEN = "MODAL_OPEN",
  MODAL_CLOSE = "MODAL_CLOSE",
  OPEN_NOTIFICATION = "OPEN_NOTIFICATION",
  CLOSE_NOTIFICATION = "CLOSE_NOTIFICATION",
  OPEN_SIGNUP_WINDOW = "OPEN_SIGNUP_WINDOW",
  CLOSE_SIGNUP_WINDOW = "CLOSE_SIGNUP_WINDOW",
}

interface FetchModalRecordOpenAction {
  type: ModalRecordTypes.MODAL_OPEN;
}
interface ShowNotificationsAction {
  type: ModalRecordTypes.OPEN_NOTIFICATION
}
interface FetchModalRecordCloseAction {
  type: ModalRecordTypes.MODAL_CLOSE;
}
interface CloseNotificationAction {
  type:ModalRecordTypes.CLOSE_NOTIFICATION
}
interface FetchOpenSignUpWindow {
  type: ModalRecordTypes.OPEN_SIGNUP_WINDOW
}
interface FetchCloseSignUpWindow {
  type: ModalRecordTypes.CLOSE_SIGNUP_WINDOW
}

export type ModalRecordAction = FetchModalRecordOpenAction |
                                FetchModalRecordCloseAction |
                                ShowNotificationsAction |
                                CloseNotificationAction |
                                FetchOpenSignUpWindow |
                                FetchCloseSignUpWindow;