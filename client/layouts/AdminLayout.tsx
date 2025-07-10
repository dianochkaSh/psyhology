import React from 'react';

interface IAdminLayout {
  children: any
}

const AdminLayout:React.FC<IAdminLayout> = ({children}) => {
  return (
    <div className="app-admin-body">
      <p>admin page</p>
      {children}
    </div>
  )

}

export default AdminLayout;