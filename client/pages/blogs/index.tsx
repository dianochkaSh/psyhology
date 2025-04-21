import MainLayout from '@/layouts/MainLayout';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '@/store';
import { fetchBlog } from '@/store/actions-creators/blog';

const Blogs = () => {

  const { posts, error } = useTypedSelector(state => state.blog);
  console.log(posts);
  return(

    <>
      <MainLayout>
        <div> блог </div>
      </MainLayout>
    </>
  )
}
export default Blogs

// export const getServerSideProps = wrapper.getServerSideProps(async (store) => {
//   const dispatch = store.dispatch as NextThunkDispatch;
//   await dispatch(await fetchBlog());
// })
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      await store.dispatch(fetchBlog());
    });