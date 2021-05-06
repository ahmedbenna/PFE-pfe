import React from 'react'

import { Typography, Grid,  Container, CssBaseline,  } from '@material-ui/core/';

import {  LocationOn,  Today, Email, Phone } from '@material-ui/icons/';

import { makeStyles } from '@material-ui/core/styles';

import { withRouter } from 'react-router-dom'

import moment from 'moment'



const useStyles = makeStyles((theme) => ({


    image: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    nom: {
        display: 'flex',
        justifyContent: 'start',
        color: 'rgb(0 35 75)',
        font: 'roboto',
        fontWeight: '700',
        paddingLeft: '20px',

    },
    specialite: {
        display: 'flex',

        justifyContent: 'start',
        color: 'rgb(0 35 75)',
        font: 'roboto',
        paddingLeft: '20px',

    },
    container: {
        marginTop: '20px',
        width:'400px',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: "15px",
    },
    nomCabinet: {
        display: 'flex',
        justifyContent: 'start',
        color: 'rgb(0 35 75)',
        font: 'roboto',
        padding: '5px',
        fontWeight: '700',
    },
    subTitle: {
        display: 'flex',
        justifyContent: 'start',
        color: 'rgb(0 35 75)',
        font: 'roboto',
        padding: '5px',
    },
    title: {
        display: 'flex',
        justifyContent: 'start',
        color: 'rgb(0 35 75)',
        font: 'roboto',
        padding: '5px',
        fontWeight: '700',
    },
   
    link: {
        textDecoration: 'none',
    },
    paper: {
        // padding: "50px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}))

function PatientPrincipaleInfo() {
    const classes = useStyles();
    const patient = JSON.parse(localStorage.getItem('patientInfo'))


    return (
        <div className={classes.doc}>
            <Container component="main" style={{ backgroundColor: '#F0F0F0', borderRadius: "15px" }}>
                <CssBaseline />
                <div className={classes.paper}>
                    <Grid container style={{ alignItems: "center" }} >

                        <Grid item xs={12}>
                            <Container className={classes.container}>
                                <Grid container>
                                    <Grid item xs={12}>

                                        <Typography className={classes.subTitle}>
                                            <Email /> Email: {patient.email}
                                        </Typography>
                                        <Typography className={classes.subTitle}>
                                            <Phone /> Telephone: {patient.patientPrincipal.telephone}

                                        </Typography>
                                        
                                    </Grid>
                                </Grid>
                            </Container>
                            <Container className={classes.container}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography className={classes.nomCabinet}>
                                             <Today/> Date de naissance: {moment(patient.patientPrincipal.dateDeNaissance).calendar()}
                                        </Typography>
                                        <hr />
                                        <Typography className={classes.subTitle}>
                                            <LocationOn /> Adresse: {patient.patientPrincipal.adresse}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Container>
                            
                            
                           
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default withRouter(PatientPrincipaleInfo)
