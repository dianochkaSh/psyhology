import PostAdminPart from '@/components/PostAdminPart';
import { Box, Grid } from '@mui/material';

const ListPostsAdmin = ({ posts }) => {
  return (
    <Grid container
          direction="row"
          className="articles-list container-posts-admin"
          sx={{
            justifyContent: "space-around",
            alignItems: "flex-start",
          }}>
      <Box sx={{
        width: '80%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',

      }}>
      { posts.map( (post) =>
        <PostAdminPart key={post._id} article={post}/>
      )}
      </Box>
    </Grid>
  )
}

export default ListPostsAdmin;