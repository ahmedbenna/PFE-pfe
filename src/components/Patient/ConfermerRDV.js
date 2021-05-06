import { Button, Divider, Grid, Typography } from '@material-ui/core'
import axios from 'axios'
import moment from 'moment'
import React, { Component } from 'react'
import ConfermerRDVDialog from './ConfermerRDVDialog'
import MemberFamille from './MemberFamille'
import MemebersNameCard from './MemebersNameCard'

export default class ConfermerRDV extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dispo: JSON.parse(localStorage.getItem('dispo')),
            patient: JSON.parse(localStorage.getItem('patientInfo')),
            members: [],
            dialog:false,
            selectedPat:'',

        }

    }

    componentDidMount() {
        const url = 'http://localhost:8080/api/comptePatients/' + this.state.patient.id + '/patients'
        console.log("memberisssssddddddd", this.state.patient.id)
        axios.get(url)
            .then(res => {
                console.log("membre :", res.data);
                this.setState({ members: res.data });

            }
            )
    }
   
    handleConfermer  (idPat)  {
        
        console.log("pattt", this.state.patient)
        const data = {
            patient: {
                id: idPat
            },
            disponibilite: {
                id: this.state.dispo.id
            }

        }
        console.log('data', data)
        axios
            .post("http://localhost:8080/api/rendezvous", data)
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) })
    }
   
    
    

 

    render() {
        console.log("med", this.state)
        return (
            <div>
                <Grid container direction='column' justify='center' alignItems='center' >
                    <Grid item>
                        <Typography variant='h4'style={{color: '#13568B'}}>Choisir un membre:</Typography>
                    </Grid>
                </Grid>
                <Typography>
                    doc nom :{this.state.dispo.medecin.email}
                </Typography>
                <Typography>
                    time:{moment(this.state.dispo.dateTime, "yyyy-MM-DDThh:mm").calendar()}
                </Typography>
                <div>
                    <Grid alignItems="center" justify='center' spacing={4} container>
                        <Grid item>
                            <Typography style={{fontWeight:'500'}}>Moi</Typography>
                            <ConfermerRDVDialog pat={this.state.patient.patientPrincipal} dispo={this.state.dispo}/>
                        </Grid>

                        {this.state.members.map(member =>

                            <Grid  item xs='auto' >
                                <ConfermerRDVDialog pat={member} dispo={this.state.dispo}/> 
                            </Grid>
                        )}
                    </Grid>
                </div>
             </div>
        )
    }
}
