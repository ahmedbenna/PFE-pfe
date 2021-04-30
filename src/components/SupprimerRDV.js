import React, { Component } from 'react'

import { TextField, TextareaAutosize , FormControl, Select, InputLabel, MenuItem, Button,Dialog, DialogTitle, DialogActions, DialogContent, Grid } from '@material-ui/core'
import axios from 'axios'

import { withStyles } from '@material-ui/core/styles';


import {Clear} from '@material-ui/icons'


const styles = {
    paper: {
        // marginTop: "50px" ,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    btn: {
        backgroundColor: '#1de9b6',
        color: '#FFFFFF',
    },
    formControl: {
        justifyContent: 'center',
        width: 'calc(400px - 5px)',
    },
    presentation:{
        width :'400px',
        borderRadius :'5px',
        backgroundColor: '#F0F0F0',
        borderColor:'#bdbdbd',
        
    },

};
class SupprimerRDV extends Component {
    constructor(props) {
        super(props)
        const rdv = props.rdv
        this.state = {

            idRDV: rdv,
            
           
        }
    }
 
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log(this.state);
        })
    }

    handleSubmit = e => {
        this.setState({ open: false })
        

        const url = "http://localhost:8080/api/rendezvous/"+this.state.idRDV
        axios.delete(url)
            .then(res => {console.log(res)
                        window.location.reload(false)
                    })
            .catch(err => console.log(err));
    };
    render() {
        const { classes } = this.props;

        const handleClickOpen = () => {
            this.setState({ open: true });
        };

        const handleClose = () => {
            this.setState({ open: false });
        };

        return (
            <div>
                <Button variant="text" color="primary" onClick={handleClickOpen}>
                   <Clear />
                </Button>
                <Dialog open={this.state.open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Supprimer rdv</DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.handleSubmit} style={{ padding: '20px' }}>

                            <Grid spacing={2} justifyContent='center' container sx={11}>
                                <Grid item>
                                    
                                </Grid>                              
                            </Grid>

                        </form>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.handleSubmit}>Supprimer</Button>

                        <Button onClick={handleClose} color="primary">
                            Annuler
                        </Button>
                    </DialogActions>
                </Dialog>
                
            </div >
        )
    }
}

export default (withStyles(styles)(SupprimerRDV))
