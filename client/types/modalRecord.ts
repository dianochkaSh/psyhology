
export interface ModalRecordState {
  isOpen: boolean,
  isOpenNotification : false
}

export enum ModalRecordTypes {
  MODAL_OPEN = "MODAL_OPEN",
  MODAL_CLOSE = "MODAL_CLOSE",
  OPEN_NOTIFICATION = "OPEN_NOTIFICATION",
  CLOSE_NOTIFICATION = "CLOSE_NOTIFICATION"
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

export type ModalRecordAction = FetchModalRecordOpenAction | FetchModalRecordCloseAction | ShowNotificationsAction | CloseNotificationAction;