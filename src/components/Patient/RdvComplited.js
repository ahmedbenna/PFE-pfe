import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import confirmed from '../../img/RdvConfirmed.svg'
import { Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';



const styles = {

    link: {
        textDecoration: 'none',
        color: 'rgb(0 35 75)'
    },
    div: {
        textAlign: 'center',

    }

};

var gapi = window.gapi
var CLIENT_ID = "952993204245-4ge4ddapp35opjs9mrt2am5a7ltv8in8.apps.googleusercontent.com"
var API_KEY = "AIzaSyAdOu_M5uGHIN_pqt72Jd_sCpru8fqoQPQ"
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
var SCOPES = "https://www.googleapis.com/auth/calendar.events"

class RdvComplited extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rdvid: localStorage.getItem('rdv'),
            rdv: {},
            doc: {},
        }
    }

    componentDidMount() {
        const url = 'http://localhost:8080/api/rendezvous/' + this.state.rdvid
        axios
            .get(url)
            .then(res => {
                console.log(res)
                this.setState({ rdv: res.data })

            })
            .catch(err => { console.log(err) })
    }



    handleGoogleCalendar = () => {
        var email = this.state.rdv.disponibilite.medecin.email
        var nom = 'Dr.' + this.state.rdv.disponibilite.medecin.nom + ' ' + this.state.rdv.disponibilite.medecin.prenom
        gapi.load('client:auth2', () => {
            console.log('loaded client')

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            })

            gapi.client.load('calendar', 'v3', () => console.log('bam!'))

            gapi.auth2.getAuthInstance().signIn()
                .then(() => {


                    var event = {
                        'summary': 'Rendez-vous Doctor!!!!',
                        'location': this.state.rdv.disponibilite.medecin.adresse,
                        'description': 'rdv avec le '+this.state.rdv.disponibilite.medecin.specialite.libelle+' Dr.'+this.state.rdv.disponibilite.medecin.nom+' '+this.state.rdv.disponibilite.medecin.prenom,
                        'start': {
                            'dateTime':  moment(this.state.rdv.disponibilite.dateTime).format(),
                            'timeZone': 'Europe/Paris'
                        },
                        'end': {
                            'dateTime':  moment(this.state.rdv.disponibilite.dateTime).format(),
                            'timeZone': 'Europe/Paris'
                        },
                        // 'recurrence': [
                        //     'RRULE:FREQ=DAILY;COUNT=2'
                        // ],
                        // 'attendees': [
                        //     { 'email': this.state.rdv.disponibilite.medecin.email, 'displayName': nom }

                        // ],
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 60 * 2}
                            ]
                        }
                    }

                    var request = gapi.client.calendar.events.insert({
                        'calendarId': 'primary',
                        'resource': event,
                    })

                    request.execute(event => {
                        console.log(event)
                        window.open(event.htmlLink)
                    })



                })
        })



    }
    render() {
        const { classes } = this.props;
        console.log('state', this.state)

        return (
            <div className={classes.div}>
                <Grid spacing={2} style={{ paddingTop: '50px' }} spacing={2} direction='column' justify='center' alignContent='center' container>
                    <Grid item>
                        <Typography variant='h4'>Voter Rendez-vous est confermer</Typography>
                    </Grid>
                    <Grid style={{ paddingTop: '50px' }} item>
                        <img style={{ height: '400px' }} src={confirmed} />
                    </Grid>
                    <Grid item style={{ paddingTop: '50px' }}>
                        <Typography variant='h4'>Ajouter le Rendez-vous au voter google calendar!</Typography>
                        <Button onClick={this.handleGoogleCalendar} style={{backgroundColor:'#F6836D',color:'#FFFFFF'}}>Ajouter</Button>
                    </Grid>
                    <Grid item style={{ paddingTop: '50px' }}>
                        <Link  className={classes.link} to='/components/PatientProfile'>
                            <Typography>Retourner au profile</Typography>
                        </Link>
                    </Grid>

                </Grid>

            </div>
        )
    }
}
export default withStyles(styles)(RdvComplited)
