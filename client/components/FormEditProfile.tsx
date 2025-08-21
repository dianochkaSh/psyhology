import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import { useDispatch } from 'react-redux';
import {
  changeEditForm,
  changeFieldsForm,
  sendDateEditPerson,
} from '@/store/actions-creators/person';
import { IFormPerson } from '@/types/person';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { createDefaultMaskGenerator, MaskedInput } from 'react-hook-mask';

const FormEditProfile:React.FC = ({ isShowForm }) => {
  const { formEditPerson } = useTypedSelector(state => state.person);
  const dispatch = useDispatch();
  const editor = useRef(null);
  const config = {
    readonly: false,
    height: 400,
    toolbarButtonSize: 'middle',
    buttons: ['bold', 'italic', 'underline', 'link', 'unlink', 'source'],
    uploader: {
      insertImageAsBase64URI: false,
    },
  };
  const handleValuePhone = (value) => {
    dispatch(changeFieldsForm('phone', value));
  }

  const handlerChangeFields = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(changeFieldsForm(event.currentTarget.name, event.currentTarget.value));
  }
  const handlerChangeDescriptionFields = (context: string) => {
    dispatch(changeFieldsForm("description", context));
  }
  const showEditForm = (isShow: boolean) => {
    dispatch(changeEditForm(isShow));
  }

  const handlerSendFormEditProfile = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries()) as IFormPerson;
    dispatch(sendDateEditPerson(formValues));

  }
  const JoditEditor = dynamic(() => import("jodit-react"), {
    ssr: false,
  });

  const maskGenerator = createDefaultMaskGenerator('+7 (999) 99 99 999');

  return (
    <>
      {
        ( isShowForm && formEditPerson !== undefined) &&
        <form className="form-update-person-information"
              onSubmit={handlerSendFormEditProfile}
        >
          <input type="hidden" name="_id" value={formEditPerson._id}/>
          <p>Формат консультации:
            <input name="format_consultation" value={formEditPerson.format_consultation} onChange={handlerChangeFields} />
          </p>
          <p>Время консультации:
            <input name="time_consultation" value={formEditPerson.time_consultation} onChange={handlerChangeFields} />
          </p>
          <p>Меня зовут:
            <input name="name" value={formEditPerson.name} onChange={handlerChangeFields} />
          </p>
          <p>Образование:
            <input name="education" value={formEditPerson.education} onChange={handlerChangeFields} />
          </p>
          <p>Телефон:

            <MaskedInput
              className="phone"
              name="phone"
              maskGenerator={maskGenerator}
              value={formEditPerson.phone}
              onChange={handleValuePhone}
            />
          </p>
          <JoditEditor
            ref={editor}
            config={config}
            name="description"
            value={formEditPerson.description}
            tabIndex={1}
            onBlur={handlerChangeDescriptionFields}
          />
          <button className="bt-blue" type="submit">Изменить данные</button>
          <button className="bt-blue" onClick={() => showEditForm(false)}>Отменить</button>
        </form>
      }
    </>
  )

}

export default FormEditProfile;
