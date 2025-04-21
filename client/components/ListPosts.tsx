import { IBlog } from '@/types/blog';
import React from 'react';

interface BlogPostsProps {
  posts: IBlog[]
}
const ListPosts :React.FC<BlogPostsProps> = ({ posts }) => {
console.log('posts');
console.log(posts);
  return(
    <div>
      {posts.map(post =>
        <div id={post._id}>
          <p>{post.title}</p>
          <p>{post.description}</p>
        </div>
      )}

    </div>
  )
}

export default ListPosts;