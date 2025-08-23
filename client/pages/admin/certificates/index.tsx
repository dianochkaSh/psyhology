import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCertificate } from '@/store/actions-creators/certificate';
import AdminLayout from '@/layouts/AdminLayout';
import isAuth from '@/components/isAuth';
import ListCertificates from '@/components/ListCertificates';

const Certificates: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCertificate());
  }, []);
  return (
    <AdminLayout>
      <ListCertificates />
    </AdminLayout>
  )
}
export default isAuth(Certificates);
