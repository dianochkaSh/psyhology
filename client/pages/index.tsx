import React from 'react';
import { Button } from '@mui/material';
import Navbar from '@/components/Navbar';
import "../style.css";

const Index = () => {

  return(
    <>
      <Navbar />
      <div>
        Главная страница
        <Button> Кнопка </Button>
      </div>

    </>
  )
}
export default Index;