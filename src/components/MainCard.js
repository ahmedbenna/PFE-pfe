import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, CssBaseline, CardMedia, CardContent, Card,}  from '@material-ui/core/';


const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
});

export default function MainCard(props) {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline/>
      <Card  className={classes.root}>
          <CardMedia
            component="img"
            alt={props.name}
            height="140"
            width='200'
            image={props.imgURL}
            title={props.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.discription}
            </Typography>
          </CardContent>
        
      </Card>
    </div>
  );
}
