import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { addArticle, addNewValueToForm, errorValidationError } from '@/store/actions-creators/blog';

const FormAddArticle = () => {
  const router = useRouter();
  const { formAddArticle, error, successAdd } = useTypedSelector(state => state.blog);
  const JoditEditor = dynamic(() => import("jodit-react"), {
    ssr: false,
  });
  useEffect(() => {
    successAdd && router.push('/admin/blogs');
  }, [successAdd]);

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
  const handlerChangeFields = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    (error) && dispatch(errorValidationError(''));
    const valueField = (event.currentTarget.name === 'picture') ? event.target.files : event.currentTarget.value;
    dispatch(addNewValueToForm(event.currentTarget.name, valueField));
  }
  const handlerChangeDescriptionFields = (context: string) => {
    (error) && dispatch(errorValidationError(''));
    dispatch(addNewValueToForm('description', context));
  }


  const goToBackBlogs = (e) => {
    e.preventDefault();
    router.push("/admin/blogs");
  }

  const handlerAddRecord = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const exp = /<p[^>]*>(&nbsp;|\s+|<br\s*\/?>)*<\/p>/g;
    if(!formAddArticle.title) {
      dispatch(errorValidationError('название'));
    } else if(formAddArticle.picture[0] === undefined) {
      dispatch(errorValidationError('картинка статьи'));
    } else if( formAddArticle.description.replace(exp, '') === '') {
      dispatch(errorValidationError('описание'));
    } else {
      const formData = new FormData()
      formData.append('title', formAddArticle.title)
      formData.append('description', formAddArticle.description)
      formData.append('picture', formAddArticle.picture[0]);
      dispatch(addArticle(formData));
    }


  }
  const titlePicture = ( formAddArticle.picture !== undefined && formAddArticle.picture[0] !== undefined) && <span>{formAddArticle.picture[0].name}</span>

  return(
    <div>
    {(error) && <p className='error-container'>{error}</p>}
      <form className="form-add-article" onSubmit={handlerAddRecord}>
        <p>Главная картинка статьи:
          <label htmlFor="hiddenFileInput" className="custom-file-upload">
            Выберите картинку
          </label>
          <input type="file" name="picture" onChange={handlerChangeFields} id="hiddenFileInput" />
          {titlePicture}
        </p>
        <p>Название:
          <input name="title" type="text" value={formAddArticle.title} onChange={handlerChangeFields} />
        </p>

        <p>Описание: </p>
        <JoditEditor
          ref={editor}
          config={config}
          name="description"
          value={formAddArticle.description}
          tabIndex={1}
          onBlur={handlerChangeDescriptionFields}
        />
        <button className="bt-blue" type="submit">Добавить статью</button>
        <button className="bt-blue" onClick={goToBackBlogs}>Отменить</button>
      </form>
    </div>
  )
}
export default FormAddArticle;
