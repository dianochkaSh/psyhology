import AdminLayout from '@/layouts/AdminLayout';
import isAuth from '@/components/isAuth';
import Profile from '@/components/Profile';

const Admin = () => {
  return (
    <AdminLayout>
      <Profile />
    </AdminLayout>
  )
}

// export const getServerSideProps = isAuth(async(context) => {
//   // Your normal `getServerSideProps` code here
//   return { props: {} };
// });
//
// export default Admin;

export default  isAuth(Admin);
// isAuth.getInitialProps = wrapper.getInitialAppProps((store) => async (): Promise => {
//   await store.dispatch(fetchPerson());
//   return  store;
// });

