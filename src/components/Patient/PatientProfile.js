import React, {  useState } from 'react'



import {  Avatar, Typography, Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Divider, } from '@material-ui/core'

import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Settings, Face, AddCircleOutline, DateRange } from '@material-ui/icons';
import PatientPrincipaleInfo from './PatientPrincipaleInfo';

import Famille from './Famille'
import PatientProfileEdit from './PatientProfileEdit'
import AjouterMembre from './AjouterMembre';
import PatientRDV from './PatientRDV';
import MembreDelete from './MembreDelete';


const useStyles = makeStyles((theme) => ({
    image: {
        width: theme.spacing(18),
        height: theme.spacing(18),
    },

    nom: {
        display: 'flex',
        justifyContent: 'start',
        color: 'rgb(0 35 75)',
        font: 'roboto',
        fontWeight: '500',
        marginTop: '10px'


    },
    specialite: {
        display: 'flex',

        justifyContent: 'start',
        color: 'rgb(0 35 75)',
        font: 'roboto',
        paddingLeft: '20px',

    },
    container: {
        padding: '20px',


    },
    pad: {
        padding: '10px'
    },
    paper: {
        backgroundColor: '#F0F0F0',
        display: "flex",
        padding: '20px',
        justifyContent: "center",
        alignItems: "center"
    },
    info: {
        display: "block",
        justifyItems: "center",

        justifyContent: "center",
        alignItems: "center",
    },

}));


function PatientProfile() {
    const classes = useStyles();
    const patient = JSON.parse(localStorage.getItem('patientInfo'))

    const [cmp, setCmp] = useState(null)


    return (
        <div >
            <Grid container>
                <Grid item xs={12} sm={4} className={classes.pad}>
                    <Grid container direction='column'>
                        <Paper className={classes.paper}>
                            <div button className={classes.container}>
                                <div className={classes.info} onClick={() => { setCmp(<PatientPrincipaleInfo />) }}>
                                    <Avatar className={classes.image} />
                                    <Typography className={classes.nom} onClick={() => { setCmp(<PatientPrincipaleInfo />) }}>
                                        {patient.patientPrincipal.nom} {patient.patientPrincipal.prenom}
                                    </Typography>
                                    {/* <Typography className={classes.specialite}>
                                        {patient.specialite.libelle}
                                    </Typography> */}
                                </div>
                                <Divider />
                                <List component="nav" >
                                    <ListItem button onClick={() => { setCmp(<Famille />) }}>
                                        <ListItemIcon>
                                            <Face />
                                        </ListItemIcon>
                                        <ListItemText primary="Membre famille" />
                                    </ListItem>
                                    <ListItem button onClick={() => { setCmp(<PatientRDV />) }}>
                                        <ListItemIcon>
                                            <DateRange />
                                        </ListItemIcon>
                                        <ListItemText primary="Mes RDVs" />
                                    </ListItem>
                                </List>
                                <Divider />
                                <List component="nav" >
                                    {/* <ListItem button onClick={() =>{setCmp( <ModifierDisponibilite/>)}}>
                                        <ListItemIcon>
                                            <Alarm />
                                        </ListItemIcon>
                                        <ListItemText primary='Modifier disponibilite' />
                                    </ListItem> */}
                                    <List component="nav" >
                                        <ListItem button onClick={() => { setCmp(<AjouterMembre />) }}>
                                            <ListItemIcon>
                                                <AddCircleOutline />
                                            </ListItemIcon>
                                            <ListItemText primary="Ajouter un membre" />
                                        </ListItem>
                                        
                                    </List>
                                    <ListItem button onClick={() => { setCmp(<PatientProfileEdit />) }}>
                                        <ListItemIcon>
                                            <Settings />
                                        </ListItemIcon>
                                        <ListItemText primary="Modifier profile" />
                                    </ListItem>


                                </List>


                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={8} className={classes.pad}>
                    <Grid container direction='column'>
                        <Paper className={classes.paper}>

                            {
                                cmp ?
                                    cmp
                                    :
                                    <PatientPrincipaleInfo />
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )

}
export default withRouter(PatientProfile)