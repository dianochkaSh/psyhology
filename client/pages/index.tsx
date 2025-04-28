import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import BigImage from '@/components/BigImage';
import Articles from '@/components/Articles';
import BlockText from '@/components/BlockText';
import { fetchBlog } from '@/store/actions-creators/blog';
import { wrapper } from '@/store';

import '../style.css';

const Index = () => {
 const textDevided: string = "У непрожитых чувств нет срока годности";
 const styleTextDevided = "title-blog";
  return(
    <>
      <MainLayout>
        <BigImage />
          {/*block about problem people*/}
          {/*block about person */}
          <div className="container-text-devided">
            <BlockText styles={styleTextDevided}  text={textDevided} />
          </div>

          {/*block articles */}

          <Articles />

          {/*block sertifications */}
          {/*block contacts */}
      </MainLayout>


    </>
  )
}
export default Index;

Index.getInitialProps = wrapper.getInitialAppProps((store) => async () => {
  return store.dispatch(fetchBlog());
});
