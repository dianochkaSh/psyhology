import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { wrapper } from '@/store';

/* actions */
import { fetchBlog } from '@/store/actions-creators/blog';

/*components*/
import Articles from '@/components/Articles';

const Blogs:React.FC = () => {
  return(
    <MainLayout>
      <Articles />
    </MainLayout>
  )
}
export default Blogs

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      await store.dispatch(fetchBlog(10));
    });
