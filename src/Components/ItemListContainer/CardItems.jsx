import React from 'react';
import style from './ItemList.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardItems = ({item}) => {
  return ( <Card sx={{ width: 345, height: 350 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={item.img}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {item.title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {item.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant='contained' size="small">Ver detalle</Button>
    </CardActions>
  </Card>
);
}

export default CardItems