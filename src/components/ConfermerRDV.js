import { Button, Typography } from '@material-ui/core'
import axios from 'axios'
import moment from 'moment'
import React, { Component } from 'react'

export default class ConfermerRDV extends Component {
    constructor(props){
        // console.log("med",props.location)
        super(props)
        this.state = {
            // info:this.props.location.med,
            // med:JSON.parse(localStorage.getItem('med')),
            dispo:JSON.parse(localStorage.getItem('dispo')),
            patient:JSON.parse(localStorage.getItem('patientInfo'))

        }
    }
    // componentDidMount() {
    //     this.setState({med:this.props.location.med})
    // }
    handleConfermer=()=>{
        console.log("pattt",this.state.patient)
        const data={
            patient: {
                id:this.state.patient.id
            },
            disponibilite:{
                id:this.state.dispo.id
            }

        }
        console.log('data',data)
        axios
                .post("http://localhost:8080/api/rendezvous",data)
                .then(res=>{console.log(res)})
                .catch(err=>{console.log(err)})
    }
    
    render () {
        console.log("med",this.state)
        return (
            <div>
                <Typography>
                    doc nom :{this.state.dispo.medecin.email}
                </Typography>
                <Typography>
                    date:{this.state.dispo.dateTime}
                </Typography>
                <Typography>
                    time:{moment(this.state.dispo.dateTime,"yyyy-MM-DDThh:mm").calendar()}
                </Typography>
                <Button onClick={this.handleConfermer}>
                    confermer
                </Button>
            </div>
        )
    }
}
