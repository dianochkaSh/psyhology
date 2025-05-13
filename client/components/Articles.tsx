import React from 'react';
import ListPosts from '@/components/ListPosts';
import { useTypedSelector } from '@/hooks/useTypedSelector';

/*components*/
import BlockText from '@/components/BlockText';

const Articles = () => {
  const { posts, error } = useTypedSelector(state => state.blog);
  const textTitle: string = "Статьи";
  const stylesTitle: string = "title-article-list";
  return (
    <div className="container-articles">
      <BlockText styles={stylesTitle} text={textTitle} />
      <ListPosts posts = {posts} />
    </div>
  )
}

export default Articles;
