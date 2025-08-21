import React from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import ModalDialog from '@mui/joy/ModalDialog';
import { Checkbox, Textarea } from '@mui/joy';
import { useDispatch } from 'react-redux';
import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask';

/* hooks */
import { useTypedSelector } from '@/hooks/useTypedSelector';

/* actions */
import { closeModal, openNotificationModal } from '@/store/actions-creators/modalRecord';
import {
  addAppointment,
  clearErrorFormAppointment,
  handleCheckboxAction,
  updateFieldForm,
} from '@/store/actions-creators/formAppointment';

/* types */
import { FormAppointment } from '@/types/formAppointment';


const ModalWindow:React.FC = () => {
const { formAppointment, agreement,  error} = useTypedSelector(state => state.appointmentForm);
  const { isOpen } = useTypedSelector(state=> state.modalWindowRecord);
  const dispatch = useDispatch();
  const handleModalClose = () => {
    dispatch(clearErrorFormAppointment());
    Object.keys(formAppointment).forEach(function(key, index) {
      dispatch(updateFieldForm(key, ''));
    });
    dispatch(handleCheckboxAction(false));
    dispatch(closeModal());
  }
  const handleValuePhone = (value) => {
    dispatch(updateFieldForm('phone', value));
  }
  const handleValueField = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(clearErrorFormAppointment());
    dispatch(updateFieldForm(event.currentTarget.name, event.currentTarget.value ));
  }
  const handleSendRequest = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries()) as FormAppointment;
    dispatch(addAppointment(formValues));
    handleModalClose();
    dispatch(openNotificationModal());
  }

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(handleCheckboxAction(event.target.checked));
  }
  const maskGenerator = createDefaultMaskGenerator('+7 (999) 99 99 999');

  return (
    <>
      { isOpen &&
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={isOpen}
          onClose={() => handleModalClose()}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <ModalDialog>
            <ModalClose variant="plain" sx={{ m: 1 }} />
              <Typography
                component="h2"
                id="modal-title"
                level="h3"
                textColor="inherit"
                sx={{ fontWeight: 'lg', mb: 1 }}
              >
                Записаться на прием
              </Typography>
            <form
              onSubmit={handleSendRequest}
            >
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Фамилия Имя Отчество</FormLabel>
                  <Input name="name" value={formAppointment.name} onChange={handleValueField} autoFocus required />
                </FormControl>
                <FormControl>
                  <FormLabel>Телефон</FormLabel>
                  <MaskedInput
                    className="phone"
                    maskGenerator={maskGenerator}
                    value={formAppointment.phone}
                    onChange={handleValuePhone}
                  />

                </FormControl>
                <FormControl>
                  <FormLabel>Опишите вашу проблему:</FormLabel>
                  <Textarea name="description" value={formAppointment.description} onChange={handleValueField} minRows={4} required />
                </FormControl>

                <FormControl size="sm" sx={{ width: 400 }}>
                  <Checkbox
                      name="agreement"
                      checked={agreement}
                      onChange={(e) => handleCheckbox(e)}
                    label={
                      <React.Fragment>
                        <Typography sx={{ fontWeight: 'md' }}>Согласие на обработку персональных данных</Typography>.
                      </React.Fragment>
                    }
                  />
                </FormControl>
                <Button disabled={!agreement && "disabled"} type="submit">Оправить заявку</Button>
              </Stack>
            </form>
            <p className="about-text-modal">
              Свяжусь с вами в ближайщее время, для уточнения деталей и записи вас на консультацию
            </p>
            { error && <div>{error}</div>}
          </ModalDialog>


        </Modal>
      }
    </>
  )
}
export default  ModalWindow;