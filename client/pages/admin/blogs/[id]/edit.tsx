import AdminLayout from '@/layouts/AdminLayout';
import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
 import "../../../../style.css";
import isAuth from '@/components/isAuth';
import { useParams, useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { changeValueArticle, getOneArticle, updateArticle } from '@/store/actions-creators/blog';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { IBlog } from '@/types/blog';

const edit:React.FC = () => {
  const JoditEditor = dynamic(() => import("jodit-react"), {
    ssr: false,
  });
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

  const params = useParams<{ tag: string; item: string }>();
  const dispatch = useDispatch();
  const route = useRouter();
  const handlerGoToBlogs = (e) => {
    e.preventDefault();
    route.push("/admin/blogs");
  }


  useEffect(() =>{
    if(params !== undefined && params.id !== undefined) {
      dispatch(getOneArticle(params.id));
    }
  }, []);
  const { article } = useTypedSelector(state => state.blog);

  const handlerChangeField = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(changeValueArticle(event.currentTarget.name, event.currentTarget.value));
  }
  const handlerUpdateArticle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries()) as IBlog;
    dispatch(updateArticle(formValues));
    route.push("/admin/blogs");
  }
  const handlerChangeDescription = (context: string) => {
    dispatch(changeValueArticle('description', context));
  }

  return (
    <AdminLayout>
      {article !== undefined &&
        <div className="container-edit-article">
          <form className="form-article" onSubmit={handlerUpdateArticle}>
            <input type="hidden" name="_id" value={article._id} />
            <p>Название статьи:
              <input name="title" value={article.title} onChange={handlerChangeField} />
            </p>

            <JoditEditor
              ref={editor}
              config={config}
              name="description"
              value={article.description}
              tabIndex={1}
              onBlur={handlerChangeDescription}
            />
            <button className="bt-blue" type="submit">Изменить данные</button>
            <button className="bt-blue" onClick={handlerGoToBlogs}>Отменить</button>
          </form>

        </div>
      }
    </AdminLayout>
  )
}

export default isAuth(edit);