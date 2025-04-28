import React from 'react';
import Navbar from '@/components/Navbar';



const MainLayout:React.FC = ({ children}) =>{
  return (
    <div className="app-body">
      <Navbar />
      {children}
    </div>
  )
}
export default MainLayout;