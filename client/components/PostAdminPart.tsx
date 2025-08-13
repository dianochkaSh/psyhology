import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import { DeleteForever, Edit } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import DeleteElement from '@/components/DeleteElement';
import React from 'react';
import { IBlog } from '@/types/blog';
import { deleteOneArticle } from '@/store/actions-creators/blog';
import { useDispatch } from 'react-redux';
const PostAdminPart:React.FC<IBlog> = ( { article } ) => {
  const description = (article  !== undefined && article.description !==  undefined ) ?  article.description.slice(0,115) : '';
  const router = useRouter();
  const handlerOpenPageEditPost = (id: string) => {
    router.push(`/admin/blogs/${id}/edit/`);
  }

  return (
    <>
      { article !== undefined &&
        <Card sx={{ maxWidth: 345 }} className="content-tab-one-article">
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {article.title}
            </Typography>
            <p>{article._id}</p>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} dangerouslySetInnerHTML={{ __html: description }}>
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <DeleteElement title={article.title}  currentId={article._id}/>
            <IconButton aria-label="edit" onClick={() => handlerOpenPageEditPost(article._id)}>
        <Edit />
            </IconButton>
          </CardActions>

        </Card>
      }
    </>
  )
}

export default PostAdminPart;