import React from 'react';
import ListPosts from '@/components/ListPosts';
import { useTypedSelector } from '@/hooks/useTypedSelector';

/*components*/
import BlockText from '@/components/BlockText';

/* styles */
import '../style.css';


const Articles = () => {
  const { posts, error } = useTypedSelector(state => state.blog);

  const textTitle: string = "Статьи: ";
  const stylesTitle: string = "title-h1";

  return (
    <div className="container-articles">
      <BlockText styles={stylesTitle} text={textTitle} />
      <ListPosts posts = {posts} />
    </div>
  )
}

export default Articles;
