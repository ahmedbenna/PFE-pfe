import { Typography } from '@material-ui/core'
import { render } from '@testing-library/react'
import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import axios from 'axios'
import moment from 'moment';
import SupprimerRDV from './SupprimerRDV';
import PatientModifierRDV from './PatientModifierRDV';

const styles = {
    
};
class PatientRDV extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            patient:JSON.parse(localStorage.getItem('patientInfo')),
            rdv:[],

        }
    }
    componentDidMount() {
        this.getRdV()
    }
    getRdV(){
        const url='http://localhost:8080/api/patients/'+this.state.patient.id+'/rendezvous'
        axios 
            .get(url)
            .then(res=>{console.log("rdv",res.data)
                        this.setState({rdv:res.data})})
            .catch(err=>{console.log(err)})
    }

    render(){
        const { classes } = this.props;
        return (
            <div>
                touts les rdv
                {this.state.rdv.map(r=>
                <div>
                <Typography>rdv time: {moment(r.disponibilite.dateTime).calendar()}</Typography>
                <SupprimerRDV rdv={r.id}/>
                <PatientModifierRDV doc={r.disponibilite.medecin}  rdv={r.id}/>
                
                
                </div>
                )
                }
                
            </div>
        )
    }
}

export default withStyles(styles)(PatientRDV)
