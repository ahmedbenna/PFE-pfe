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
        // this.handleConfermer = this.handleConfermer.bind(this);

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
    // componentDidMount() {
    //     this.setState({med:this.props.location.med})
    // }
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
    // componentDidUpdate(prevProps, prevState) {
    //     if(this.prevState.selectedPat !== this.state.selectedPat ){

    //     }
    // }
    
    

 

    render() {
        console.log("med", this.state)
        return (
            <div>
                <Typography>
                    doc nom :{this.state.dispo.medecin.email}
                </Typography>
                <Typography>
                    time:{moment(this.state.dispo.dateTime, "yyyy-MM-DDThh:mm").calendar()}
                </Typography>
                <div>
                    <Grid alignItems="center" justify='center' spacing={4} container>
                        <Grid item>
                            <Typography>Moi</Typography>
                            <Button onClick={()=>this.setState({selectedPat:this.state.patient.patientPrincipal})}>
                                <MemebersNameCard nom={this.state.patient.patientPrincipal.nom} prenom={this.state.patient.patientPrincipal.prenom} />
                            </Button>
                            {/* {/* {(this.state.dialog) ?
                                (    <>
                                    <ConfermerRDVDialog idPat={this.state.patient.patientPrincipal.id}/>
                                    {/* {  this.setState({dialog:false})} */}
                                    {/* </>  */}
                                {/* ):('')} */}  
                        </Grid>

                        {this.state.members.map(member =>

                            <Grid  item xs='auto' >
                                {/* <Divider /> */}
                                <Button onClick={()=>this.setState({selectedPat:member})}>
                                    <MemebersNameCard nom={member.nom} prenom={member.prenom} />
                                </Button>
                                {/* {(this.state.dialog) ?
                                (   <>
                                    <ConfermerRDVDialog idPat={member.id}/>
                                  {  this.setState({dialog:false})}
                                    </>
                                ):('')} */}
                            </Grid>
                            

                        )}

                    </Grid>
                </div>
                <div>
                    {(this.state.selectedPat)?
                    (   <div>
                            <Typography>Patient selectioner: {this.state.selectedPat.nom} {this.state.selectedPat.prenom}</Typography>
                            <Button onClick={this.handleConfermer(this.state.selectedPat.id)}>Confermer</Button>
                        </div>
                    ):('')}
                </div>
                
            </div>
        )
    }
}
