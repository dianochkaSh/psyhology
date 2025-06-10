import { ModalRecordAction, ModalRecordState, ModalRecordTypes } from '@/types/modalRecord';

const initialState :ModalRecordState = {
  isOpen: false,
  isOpenNotification: false
}

export const modalRecordReducer = (state = initialState, action: ModalRecordAction):ModalRecordState => {
  switch(action.type){
    case ModalRecordTypes.MODAL_OPEN:
      return {... state, isOpen: true };
    case ModalRecordTypes.MODAL_CLOSE:
      return  { ... state, isOpen: false };
    case ModalRecordTypes.OPEN_NOTIFICATION:
      return { ... state, isOpenNotification: true}
    case ModalRecordTypes.CLOSE_NOTIFICATION:
      return { ... state, isOpenNotification: false }
    default:
      return  state
  }
};