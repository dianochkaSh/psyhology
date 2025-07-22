import AdminLayout from '@/layouts/AdminLayout';
import isAuth from '@/components/isAuth';

const Admin = () => {
  return (
    <>
      <AdminLayout>
        <p> page first admin part</p>
      </AdminLayout>
    </>
  )
}

export default  isAuth(Admin);
