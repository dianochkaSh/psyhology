import { ModalRecordTypes } from '@/types/modalRecord';
export const openModal = () => {
  return { type: ModalRecordTypes.MODAL_OPEN };
};
export const closeModal = () => {
  return { type: ModalRecordTypes.MODAL_CLOSE };
};
export const openNotificationModal = () => {
  return { type: ModalRecordTypes.OPEN_NOTIFICATION }
}

export const closeNotification = () => {
  return { type: ModalRecordTypes.CLOSE_NOTIFICATION }
}