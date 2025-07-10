import React from 'react';
import Card from '@mui/joy/Card' ;
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { AspectRatio, CardActions, CardOverflow, Link } from '@mui/joy';
import { useRouter } from 'next/navigation';

/* types */
import { IBlog } from '@/types/blog';

interface BlogPost {
  post: IBlog[]
}

const Article : React.FC<BlogPost> = ({ post }) =>  {
  return (
    <Card className="card-article" sx={{ width: 320, marginBottom: 3, marginTop: 3 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <div>
        <Typography level="title-lg">{post.title}</Typography>
      </div>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">{post.description}</Typography>
        </div>
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
