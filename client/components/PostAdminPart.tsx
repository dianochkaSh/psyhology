import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import { Edit } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import DeleteElement from '@/components/DeleteElement';
import React from 'react';
import { IBlog } from '@/types/blog';
import { VKShareButton, VKIcon } from 'react-share';
import { SERVER_URL } from '@/consts/consts';

const PostAdminPart:React.FC<IBlog> = ( { article } ) => {
  const [img, setImg] = React.useState(SERVER_URL + article.picture);
  const description = (article  !== undefined && article.description !==  undefined ) ?  article.description.slice(0,115) : '';
  const router = useRouter();
  const handlerOpenPageEditPost = (id: string) => {
    router.push(`/admin/blogs/${id}/edit/`);
  }
  const handlerErrorImage = () => {
    setImg('/img-problems/stypor.jpeg');
  }

  return (
    <>
      { article !== undefined &&
        <Card sx={{ maxWidth: 345 }} className="content-tab-one-article">
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={img}
            onError={handlerErrorImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {article.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} dangerouslySetInnerHTML={{ __html: description }}>
            </Typography>
          </CardContent>
          <CardActions>
            <VKShareButton
              url="http://localhost:3003/blogs/6895ec2873c40586f4675e58"
              title={article.title}
              description={article.description}
              image="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318" // Optional: URL of an image to include
            >
              <VKIcon size={32} round />
            </VKShareButton>
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
