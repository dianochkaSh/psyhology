import React from 'react';
import ModalDialog from '@mui/joy/ModalDialog';

import ModalClose from '@mui/joy/ModalClose';
import Modal from '@mui/joy/Modal';
import Image from 'next/image';

/* hooks */
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { closeNotification } from '@/store/actions-creators/modalRecord';

interface NotificationsInterface {
  textNotifications: string
}

const NotificationsModalWindow:React.FC<NotificationsInterface> = ( {textNotifications}) => {
  const { isOpenNotification } = useTypedSelector(state=> state.modalWindowRecord);
  const dispatch = useDispatch();
  const handleCloseNotification = () => {
    dispatch(closeNotification());
  }
  return (
    <>
      { isOpenNotification &&
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={isOpenNotification}
          onClose={() => handleCloseNotification()}

          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <ModalDialog className="notification-modal">
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <Image src="/header.jpg" width="200" height="200" alt="picture-person" />
            <p> {textNotifications} </p>
          </ModalDialog>
        </Modal>
        }
    </>
  )
}

export default  NotificationsModalWindow;
