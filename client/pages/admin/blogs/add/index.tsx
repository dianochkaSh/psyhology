import isAuth from '@/components/isAuth';
import BlockText from '@/components/BlockText';
import React from 'react';
import AdminLayout from '@/layouts/AdminLayout';
import FormAddArticle from '@/components/FormAddArticle';

const add = () => {
  const textTitle: string = "Добавление новой статьи";
  const stylesTitle: string = "title-admin-part";
  return (
    <AdminLayout>
      <BlockText styles={stylesTitle} text={textTitle} />
      <FormAddArticle/>

    </AdminLayout>
  )
 }
 export default  isAuth(add);
