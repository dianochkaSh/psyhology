import React from 'react';
import NavbarAdmin from '@/components/NavbarAdmin';
import "../style.css";

interface IAdminLayout {
  children: any
}

const AdminLayout:React.FC<IAdminLayout> = ({children}) => {


  return (
    <div className="app-admin-body">
      <NavbarAdmin />
      {children}
    </div>
  )

}

export default AdminLayout;