import React from 'react';
import Rendezvous from './Rendezvous'
import { makeStyles } from '@material-ui/core/styles';



import { Typography, CssBaseline, Avatar, Grid } from '@material-ui/core/';
import Calendar from './Calendar';


const useStyles = makeStyles((theme) => ({
  image: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
  card: {
    maxWidth: '1000px',
    backgroundColor: '#FFFFFF',
    marginTop: '50px',
    padding: '10px',
  },
  nom: {
    color: '#00234b',
    fontWeight: '700',
    fontSize: '30px',
  },
  specialite: {
    color: '#00234b',
    fontWeight: '500',
    fontSize: '20px',
  },
  ville: {
    color: "#9e9e9e",
    fontWeight: '400',
    fontSize: '15px',
  },
  address: {
    color: "#9e9e9e",
    fontWeight: '300',
    fontSize: '15px',
  },

}))

export default function Doctorcard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container className={classes.card}>
        <Grid item>
          <Grid container >
            <Grid item style={{ padding: '10px' }}>
              <Avatar className={classes.image} src={props.img} />
            </Grid>
            <Grid item>
              <Typography className={classes.nom}>
                Dr.{props.nom}{props.prenom}
              </Typography>
              <Typography className={classes.specialite}>
                {props.specialite}
              </Typography>
              <Typography className={classes.ville}>
                {props.ville}
              </Typography>
              <Typography className={classes.address}>
                {props.address}
              </Typography>
            </Grid>
            <Grid item>

            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Calendar
          doc={props.doc}
          />
          
        </Grid>
      </Grid>

    </div>
  );
}
