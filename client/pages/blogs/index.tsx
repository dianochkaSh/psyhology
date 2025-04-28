import MainLayout from '@/layouts/MainLayout';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '@/store';
import { fetchBlog } from '@/store/actions-creators/blog';
import Articles from '@/components/Articles';
import Typography from '@mui/joy/Typography';
import { Divider } from '@mui/joy';

const Blogs = () => {

  const { posts, error } = useTypedSelector(state => state.blog);
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
      await store.dispatch(fetchBlog());
    });