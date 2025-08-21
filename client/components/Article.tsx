import React from 'react';
import Card from '@mui/joy/Card' ;
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { AspectRatio, CardActions, CardOverflow, Link } from '@mui/joy';

/* types */
import { IBlog } from '@/types/blog';
import { SERVER_URL } from '@/consts/consts';
import Image from 'next/image';

interface BlogPost {
  post: IBlog[]
}

const Article : React.FC<BlogPost> = ({ post }) =>  {

  const [img, setImg] = React.useState(SERVER_URL + post.picture);
  const description = (post  !== undefined && post.description !==  undefined ) ?  post.description.slice(0,115) : '';
  const handlerErrorImage = () => {
    setImg('/img-problems/stypor.jpeg');
  }
  return (
    <Card className="card-article" sx={{ width: 320, marginBottom: 3, marginTop: 3 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <Image
            src={img}
            width={300}
            height={200}
            loading="lazy"
            alt=""
            onError={handlerErrorImage}
          />
        </AspectRatio>
      </CardOverflow>
      <div>
        <Typography sx={{ justifyContent: 'left' }} level="title-lg">{post.title}</Typography>
      </div>
      <CardContent orientation="horizontal">
        <div className="description"  dangerouslySetInnerHTML={{ __html: description }}></div>
     </CardContent>
      <CardActions buttonFlex="0 1 120px">
        <Link
          href={`/blogs/${post._id}`}
          color="neutral"
          underline="hover"
        >
          Читать далее..
        </Link>
      </CardActions>
    </Card>
  )
}
export default Article;
