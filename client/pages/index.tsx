import React from 'react';
import { Button } from '@mui/material';
import "../style.css";
import MainLayout from '@/layouts/MainLayout';
import FileUpload from '@/components/FileUpload';
import BigImage from '@/components/BigImage';
import Articles from '@/components/Articles';

const Index = () => {

  return(
    <>
      <MainLayout>
        <BigImage />
          {/*block about problem people*/}
          {/*block about person */}
          {/*block articles */}

          <Articles />

          {/*block sertifications */}
          {/*block contacts */}
      </MainLayout>


    </>
  )
}
export default Index;