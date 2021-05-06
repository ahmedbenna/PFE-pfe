import React from 'react'
import { Container, Grid, Typography, } from '@material-ui/core'

import ModifierMembre from './ModifierMembre'

import { makeStyles } from '@material-ui/core/styles';
import { LocationOn, Today, Phone } from '@material-ui/icons/';

import moment from 'moment'



const useStyles = makeStyles((theme) => ({
  root: {


  },
  text: {
    display: 'flex',
    justifyContent: 'start',
    color: 'rgb(0 35 75)',
    font: 'roboto',
    padding: '10px',
    fontWeight: '700',
  },
  Container: {

    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: "15px",
  },
  subTitle: {
    display: 'flex',
    justifyContent: 'start',
    color: 'rgb(0 35 75)',
    font: 'roboto',
    padding: '5px',
  },

}))
export default function MemberFamille(props) {
  const classes = useStyles();

  const { nom, prenom, dateDeNaissance, adresse, telephone, genre } = props;

  return (

    <div className={classes.root}>
      <Container className={classes.Container}>
        <Grid container>

          <Grid item xs={12}>
            <Grid container>
              <Grid item>
                <Typography variant={4} className={classes.text}>
                  {props.nom} {props.prenom}
                </Typography>
              </Grid>
              <Grid item alignItems='flex-end'>
                
              </Grid>
            </Grid>

            <hr />
            <Typography className={classes.subTitle}>
              <Today /> Date de naissance: {moment(props.dateDeNaissance).calendar()}
            </Typography>
            <Typography className={classes.subTitle} >
              <LocationOn /> Adresse: {props.adresse}
            </Typography>
            <Typography className={classes.subTitle}>
              <Phone /> Telephone: {props.telephone}
            </Typography >
            {/* <Typography className={classes.genre}>
                       {props.genre}
                    </Typography> */}
          </Grid>
        </Grid>
      </Container>
    </div>

  )
}
