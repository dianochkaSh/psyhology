import React from 'react';
import { wrapper } from '@/store';

/*components*/
import MainLayout from '@/layouts/MainLayout';
import Articles from '@/components/Articles';
import BlockText from '@/components/BlockText';
import ButtonLink from '@/components/ButtonLink';
import ListProblemsRecords from '@/components/ListProblemsRecords';
import ContactBlock from '@/components/ContactBlock';

/*styles*/
import '../style.css';

/* action */
import { fetchProblems } from '@/store/actions-creators/problem';
import { fetchBlog } from '@/store/actions-creators/blog';

const Index = () => {
 const textDevided: string = "У непрожитых чувств нет срока годности";
 const styleTextDevided:string = "title-blog";
 const titleBt:string = "Увидеть больше записей";
  return(
    <>
      <MainLayout>
        <section className="section-img">
          <ContactBlock />
        </section>
          {/*block about problem people*/}
          <ListProblemsRecords />
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
      </MainLayout>
    </>
  )
}
export default Index;

Index.getInitialProps = wrapper.getInitialAppProps((store) => async () => {
    await store.dispatch(fetchBlog(3));
    await store.dispatch(fetchProblems());
  return  store;
});
