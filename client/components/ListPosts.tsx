import React from 'react';
import { IBlog } from '@/types/blog';
import { Box, Grid } from '@mui/material';

/*components*/
import Article from '@/components/Article';

interface BlogPostsProps {
  posts: IBlog[]
}
const ListPosts :React.FC<BlogPostsProps> = ({ posts }) => {
  return(
    <Grid container
      direction="row"
      sx={{
        justifyContent: "space-around",
        alignItems: "flex-start",
      }}>
      <Box sx={{
        width: '80%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',

      }}>
        {
          posts.map((post) =>
            <Article key={post._id} post={post} />
          )
        }
      </Box>
    </Grid>
  )
}

export default ListPosts;
