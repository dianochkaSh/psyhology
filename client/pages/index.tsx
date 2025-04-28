import React from 'react';
import { fetchBlog } from '@/store/actions-creators/blog';
import { wrapper } from '@/store';


/*components*/
import MainLayout from '@/layouts/MainLayout';
import BigImage from '@/components/BigImage';
import Articles from '@/components/Articles';
import BlockText from '@/components/BlockText';
import ButtonLink from '@/components/ButtonLink';


/*styles*/
import '../style.css';

const Index = () => {
 const textDevided: string = "У непрожитых чувств нет срока годности";
 const styleTextDevided:string = "title-blog";
 const titleBt:string = "Увидеть больше записей";
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
          <div className="container-bt-all-articles">
            <ButtonLink
              titleText={titleBt}
              urlText="/blogs"
            />
          </div>


          {/*block sertifications */}
          {/*block contacts */}
      </MainLayout>
    </>
  )
}
export default Index;

Index.getInitialProps = wrapper.getInitialAppProps((store) => async () => {
  return store.dispatch(fetchBlog(3));
});
