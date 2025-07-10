import React from 'react';
import { wrapper } from '@/store';
import { getOneArticle } from '@/store/actions-creators/blog';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { GetServerSideProps } from 'next';
import MainLayout from '@/layouts/MainLayout';
import { SERVER_URL } from '@/consts/consts';

/*styles*/
import '../../style.css';

const ArticlePage: React.FC = () => {
  const { article } = useTypedSelector(state => state.blog);
  return (
    <MainLayout>
      <div className="container-one-article">
        <article className="article-content">
          <div className="article-image">
            <img height={575}
                 width={925}
                 src={SERVER_URL + article.picture}
                 role="presentation" />
          </div>
          <h1 className="article-title">{article.title}</h1>
          <div className="article-content">{article.description}</div>
        </article>
      </div>
    </MainLayout>
)
}
export default ArticlePage;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async (context) => {
      const { id } = context.query;
      await store.dispatch(getOneArticle(id));
    });
