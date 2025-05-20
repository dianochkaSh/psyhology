import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import Typography from '@mui/joy/Typography';
import { Divider } from '@mui/joy';
import { wrapper } from '@/store';

/* store */
import { fetchBlog } from '@/store/actions-creators/blog';

/*components*/
import Articles from '@/components/Articles';

const Blogs:React.FC = () => {

  const {posts, error} = useTypedSelector(state => state.blog);
  return(
    <>
    <MainLayout>
      <Typography className="title-blog">Список статей: </Typography>
      <Divider />
      <Articles />
    </MainLayout>
    </>
  )
}
export default Blogs

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      await store.dispatch(fetchBlog(10));
    });