import React from 'react';
import { wrapper } from '@/store';

/*components*/
import MainLayout from '@/layouts/MainLayout';
import Articles from '@/components/Articles';
import BlockText from '@/components/BlockText';
import ButtonLink from '@/components/ButtonLink';
import ListProblemsRecords from '@/components/ListProblemsRecords';
import ContactBlock from '@/components/ContactBlock';
import AboutPerson from '@/components/AboutPerson';
import BlockCertifications from '@/components/BlockCertifications';

/*styles*/
import '../style.css';

/* action */
import { fetchProblems } from '@/store/actions-creators/problem';
import { fetchBlog } from '@/store/actions-creators/blog';
import { fetchPerson } from '@/store/actions-creators/person';
import { fetchCertificate } from '@/store/actions-creators/certificate';

/* constants */
import { COUNT_ARTICLES_IN_MAIN } from '@/consts/consts';


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

        {/*block about person*/}
        <AboutPerson />

        {/*block about person */}
        <div className="container-text-devided">
          <BlockText styles={styleTextDevided}  text={textDevided} />
        </div>

        {/*block about problem people*/}
        <ListProblemsRecords />



        {/*block articles */}
        <Articles />
        <div className="container-bt-all-articles">
          <ButtonLink
            titleText={titleBt}
            urlText="/blogs"
          />
        </div>

          {/*block sertifications */}

        <BlockCertifications />
      </MainLayout>
    </>
  )
}
export default Index;

Index.getInitialProps = wrapper.getInitialAppProps((store) => async (): Promise => {
    await store.dispatch(fetchBlog(COUNT_ARTICLES_IN_MAIN));
    await store.dispatch(fetchProblems());
    await store.dispatch(fetchPerson());
    await store.dispatch(fetchCertificate());
  return  store;
});
