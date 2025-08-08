import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { addArticle, addNewValueToForm } from '@/store/actions-creators/blog';
import { IArticle } from '@/types/blog';

const FormAddArticle = () => {
  const { formAddArticle } = useTypedSelector(state => state.blog);
  const JoditEditor = dynamic(() => import("jodit-react"), {
    ssr: false,
  });
  const router = useRouter();
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
    const valueField = (event.currentTarget.name === 'picture') ? event.target.files : event.currentTarget.value;
    dispatch(addNewValueToForm(event.currentTarget.name, valueField));
  }
  const handlerChangeDescriptionFields = (context: string) => {
    dispatch(addNewValueToForm('description', context));
  }


  const goToBackBlogs = (e) => {
    e.preventDefault();
    router.push("/admin/blogs ");
  }

  const handlerAddRecord = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData()
    formData.append('title',formAddArticle.title)
    formData.append('description', formAddArticle.description)
    formData.append('picture', formAddArticle.picture[0]);
    dispatch(addArticle(formData));
    router.push("/admin/blogs ");

  }
console.log('formAddArticle');
console.log(formAddArticle);
  return(
    <>
      <form className="form-add-article" onSubmit={handlerAddRecord}>
        {/*<p>Главная картинка статьи:*/}
        {/*  <label htmlFor="hiddenFileInput" className="custom-file-upload">*/}
        {/*    Выберите картинку*/}
        {/*  </label>*/}
        {/*  <input type="file" name="picture" value={formAddArticle.picture} id="hiddenFileInput" />*/}
        {/*</p>*/}
        <p>Главная картинка статьи:
        <input type="file" name="picture"  onChange={handlerChangeFields} />
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
    </>
  )
}
export default FormAddArticle;