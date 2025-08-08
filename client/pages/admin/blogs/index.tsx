import AdminLayout from '@/layouts/AdminLayout';
import isAuth from '@/components/isAuth';
import React, { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBlog } from '@/store/actions-creators/blog';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import ListPostsAdmin from '@/components/ListPostsAdmin';
import BlockText from '@/components/BlockText';

import "../../../style.css"
import { COUNT_ARTICLES_IN_ADMIN } from '@/consts/consts';
import { Link } from '@mui/joy';

const Blogs = ( ) => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchBlog(COUNT_ARTICLES_IN_ADMIN));
  }, []);

  const { posts } = useTypedSelector(state => state.blog);
  const textTitle: string = "Список статей";
  const stylesTitle = "title-admin-part";

  return (
    <AdminLayout>
      <div className="div-title-articles">
        <BlockText styles={stylesTitle} text={textTitle} />
        <Link href="/admin/blogs/add">Добавить новую статью</Link>
      </div>

      {
        posts !== undefined &&
        <ListPostsAdmin posts={posts} />
      }
    </AdminLayout>

  )
}
export default isAuth(Blogs);
