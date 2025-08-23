import { SERVER_URL } from '@/consts/consts';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Delete, Edit } from '@mui/icons-material';
import * as React from 'react';

const Certificate = ( { certificate}) => {

  const showBigImage = (url) => {

  }
  return (
    <>
      <Card sx={{ maxWidth: 345 }} className="certificate">
        <CardMedia
          onClick={() => showBigImage("https://natasha-psyholog.ru/wp-content/uploads/2022/09/%D0%A1%D0%BA%D0%B0%D0%BD-2-739x1024.jpeg")}
          component="img"
          height="194"
          image="https://natasha-psyholog.ru/wp-content/uploads/2022/09/%D0%A1%D0%BA%D0%B0%D0%BD-2-739x1024.jpeg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {certificate.title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="edit">
            <Edit />
          </IconButton>
          <IconButton aria-label="delete">
            <Delete />
          </IconButton>
        </CardActions>
      </Card>
    </>
  )
}

export default Certificate;
