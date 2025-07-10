'use client';
import React from 'react';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import Stack from '@mui/joy/Stack';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import {
  ClearFieldErrorSignInAction,
  clearFieldSignIn,
  signIn,
  updateFieldValueSignIn,
} from '@/store/actions-creators/formSignIn';
import { closeSignUpModal } from '@/store/actions-creators/modalRecord';
import { FormSignIn } from '@/types/formSignIn';
import { useRouter } from 'next/navigation';

const ModalSignUpWindow: React.FC = () => {
  const router = useRouter();
  const { isOpenSignUpWindow } = useTypedSelector(state => state.modalWindowRecord);
  const { formSignIn, error } = useTypedSelector(state => state.signInForm);
  const dispatch = useDispatch();
  const handleSubmitSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries()) as FormSignIn
    dispatch(signIn(formValues));
    handleCloseSignUpWindow();
    router.push('/admin');
  }

  const handleValueFieldForm = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    clearError();
    dispatch(updateFieldValueSignIn(event.currentTarget.name, event.currentTarget.value ));
  }
  const handleCloseSignUpWindow = () => {
    dispatch(ClearFieldErrorSignInAction());
    dispatch(clearFieldSignIn());
    dispatch(closeSignUpModal());
  }
  const clearError = () => {
    dispatch(ClearFieldErrorSignInAction());
  }
  return (
    <>
      {isOpenSignUpWindow &&
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={isOpenSignUpWindow}
          onClose={handleCloseSignUpWindow}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <ModalDialog>
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <form
              onSubmit={handleSubmitSignIn}
            >
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Логин</FormLabel>
                  <Input name="login" value={formSignIn.login} onChange={handleValueFieldForm} autoFocus required />
                </FormControl>
                <FormControl>
                  <FormLabel>Пароль</FormLabel>
                  <Input name="password" type="password" value={formSignIn.password} onChange={handleValueFieldForm} autoFocus required />
                </FormControl>
                <Button  type="submit">Войти</Button>
              </Stack>
            </form>
            {error && <div> <p>{error}</p></div>}
          </ModalDialog>
        </Modal>
      }
    </>
  )
 }

 export default ModalSignUpWindow;
