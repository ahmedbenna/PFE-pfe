import React, { Component } from 'react'

import { Grid, Typography, Divider, Button, Dialog, DialogActions, DialogContent } from '@material-ui/core'
import MemberFamille from './MemberFamille'
import { Clear } from '@material-ui/icons';

import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import axios from 'axios'
import MemebersNameCard from './MemebersNameCard';
import moment from 'moment';



const styles = {

    link: {
        textDecoration: 'none',
        color: 'rgb(0 35 75)'
    },

};


class ConfermerRDVDialog extends Component {
    constructor(props) {

        super(props)
        this.state = {
            open:false,
        }
        console.log(this.state.id)
    }
    
   
    
    
    
    handleConfermer = e => {
        console.log("pattt", this.state.patient)
        const data = {
            patient: {
                id: this.props.pat.id
            },
            disponibilite: {
                id: this.props.dispo.id
            }

        }
        console.log('data', data)
        axios
            .post("http://localhost:8080/api/rendezvous", data)
            .then(res => { console.log(res) 
                    window.location = '/components/RdvComplited'})
            .catch(err => { console.log(err) })
        
    }

    render() {
        const { classes } = this.props;
       

        

        

        return (
            <div className={classes.contaier}>

                <div>
                    <Button just on onClick={()=>{this.setState({ open: true })}}> <MemebersNameCard nom={this.props.pat.nom} prenom={this.props.pat.prenom} /></Button>

                    <Dialog open={this.state.open} onClose={()=>{this.setState({ open: false })}} aria-labelledby="form-dialog-title">

                        <DialogContent>
                            <Typography vairant='h5'> patient: {this.props.pat.nom} {this.props.pat.prenom} </Typography>
                            <Typography variant='p'>{moment(this.props.dispo.dateTime).calendar()} </Typography>

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleConfermer} color="primary">
                                Confermers
                                            </Button>
                            <Button onClick={()=>{this.setState({ open: false })}} color="primary">
                                Annuler
                                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>





            </div>
        )
    }
}
export default withStyles(styles)(ConfermerRDVDialog)