import React, { useLayoutEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { wrapper } from '@/store';

/* actions */
import { fetchBlog } from '@/store/actions-creators/blog';

/*components*/
import Articles from '@/components/Articles';
import { COUNT_ARTICLES_IN_ADMIN } from '@/consts/consts';
import { useDispatch } from 'react-redux';

const Blogs:React.FC = () => {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(fetchBlog(30));
  }, []);
  return(
    <MainLayout>
      <Articles />
    </MainLayout>
  )
}
export default Blogs

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ req, res }) => {
//       await store.dispatch(fetchBlog(10));
//     });
