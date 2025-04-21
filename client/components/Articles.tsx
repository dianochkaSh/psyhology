import React from 'react';
import ListPosts from '@/components/ListPosts';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchBlog } from '@/store/actions-creators/blog';
import {NextThunkDispatch, wrapper} from '@/store';
import { GetServerSideProps } from 'next';

const Articles = () => {
  const {posts, error} = useTypedSelector(state => state.blog);
  return (
    <>
      <ListPosts posts = {posts} />
    </>
  )
}







// export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
//   const dispatch = store.dispatch as NextThunkDispatch
//   await dispatch(await fetchBlog());
// })
// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async (context) => {
//       await store.dispatch(fetchBlog());
//     }
// )
//
// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ store }) => {
//     store.dispatch(getPosts())
//   }
// )



// export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
//   console.log(2434);
//   const dispatch = store.dispatch as NextThunkDispatch;
//   await dispatch(await fetchBlog());
// })

export const  getStaticProps = wrapper.getStaticProps( (store) => async ({ }) =>{

  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(await fetchBlog());
  // await store.dispatch(queryBlogs());
  // return{
  //   revalidate:config.PAGE_CONFIG.REVALIDATE,
  // }
})



// export const getServerSideProps = wrapper.getServerSideProps(store => ({req, res, ...etc}) => {
//   console.log('2. Page.getServerSideProps uses the store to dispatch things');
//   store.dispatch({type: 'TICK', payload: 'was set in other page'});
// });


export default Articles;