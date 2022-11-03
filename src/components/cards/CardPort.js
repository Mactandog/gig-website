import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../../styles/css/whygig.css";
import avatar1 from "../../assets/media/images/avatar1.png";
// "../../assets/media/images/img2.jpg";

let CardPort = (props) => {
  return (
    <Card sx={{ width:400, height:400, my:2}}>
      <CardMedia/>
      <img src={avatar1} className='avatar'></img>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
       
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
        FullStack Developer
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button size="small" variant='contained' color='info'><a href ="https://google.com/" target="_blank">Check Portfolio </a></Button>
      </CardActions>
    </Card>
  );
}

export default CardPort
