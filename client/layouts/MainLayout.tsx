import React from 'react';
import Navbar from '@/components/Navbar';

interface IMainLayout {
  children: any
}


const MainLayout:React.FC<IMainLayout> = ({ children}) =>{
  return (
    <div className="app-body">
      <Navbar />
      {children}
    </div>
  )
}
export default MainLayout;