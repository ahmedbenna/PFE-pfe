import React, {  useState } from 'react'



import {  Avatar, Typography, Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Divider, } from '@material-ui/core'

import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import DoctorRendezVous from './DoctorRendezVous';
import Disponibilite from './Disponibilite';
import EditDoctorProfile from './EditDoctorProfile';
import Doctorprofi from './Doctorprofi'

import { Settings, EventNote, Alarm, Event } from '@material-ui/icons';

import AjouterDisponibilite from './AjouterDisponibilite';
import DoctorCalendarPrincipal from './DoctorCalendarPrincipal';
import ModifierMDP from './ModifierMDP';


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
        font:'roboto', 
        paddingLeft :'20px',
        
    },
    container: {
        padding: '20px',


    },
    pad: {
        padding: '20px'
    },
    paper: {
        backgroundColor: '#F0F0F0',
        display: "flex",
        padding:'20px',
        justifyContent: "center",
        alignItems: "center"
    },

}));


function ProfileDoctor() {
    const classes = useStyles();
    const doctor = JSON.parse(localStorage.getItem('doctorInfo'))

    const [ cmp ,setCmp ]= useState(null)


    return (
        <div >
            <Grid container>
                <Grid item xs={12} sm={3} className={classes.pad}>
                    <Grid container direction='column'>
                        <Paper className={classes.paper}>
                            <div className={classes.container}>
                                <div className={classes.info} onClick={() =>{setCmp( <Doctorprofi/>)}}>
                                    <Avatar className={classes.image} src='../img/doc.png' />
                                    <Typography  className={classes.nom} onClick={() =>{setCmp( <Doctorprofi/>)}}>
                                        Dr. {doctor.nom} {doctor.prenom}
                                    </Typography>
                                    <Typography className={classes.specialite}>
                                        {doctor.specialite.libelle}
                                    </Typography>
                                </div>
                                <Divider />
                                <List component="nav" >      
                                    <ListItem button onClick={() =>{setCmp(<DoctorCalendarPrincipal />)}}>
                                        <ListItemIcon>
                                            <Event />
                                        </ListItemIcon>
                                        <ListItemText primary="Calendar"  />
                                    </ListItem>
                                </List>
                                <Divider />
                                <List component="nav" >
                                    <ListItem button onClick={() =>{setCmp(<DoctorRendezVous/>)}}>
                                        <ListItemIcon>
                                            <EventNote />
                                        </ListItemIcon>
                                        <ListItemText primary="Mes rendez-vous"  />
                                    </ListItem>
                                    <ListItem button onClick={() =>{setCmp( <Disponibilite/>)}}>
                                        <ListItemIcon>
                                            <Alarm />
                                        </ListItemIcon>
                                        <ListItemText primary='Disponibilite' />
                                    </ListItem>
                                   
                                        <ListItem button onClick={() =>{setCmp(<EditDoctorProfile/>)}}>
                                            <ListItemIcon>
                                                <Settings />
                                            </ListItemIcon>
                                            <ListItemText primary="Modifier profile" />
                                        </ListItem>
                                        <ListItem button onClick={() =>{setCmp(<ModifierMDP/>)}}>
                                            <ListItemIcon>
                                                <Settings />
                                            </ListItemIcon>
                                            <ListItemText primary="Changer mote de passe" />
                                        </ListItem>
                                    

                                </List>


                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={9} className={classes.pad}>
                    <Grid container direction='column'>
                        <Paper className={classes.paper}>

                            {
                                cmp ?
                                    cmp
                                :
                                    <Doctorprofi/>
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )

}
export default withRouter(ProfileDoctor)