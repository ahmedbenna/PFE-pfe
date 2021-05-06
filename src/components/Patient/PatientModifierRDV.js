import React, { Component } from 'react'

import { TextField, TextareaAutosize , FormControl, Select, InputLabel, MenuItem, Button,Dialog, DialogTitle, DialogActions, DialogContent, Grid } from '@material-ui/core'
import axios from 'axios'

import { withStyles } from '@material-ui/core/styles';


import {Edit} from '@material-ui/icons'
import Calendar from '../Recherche/Calendar';
import CalendarRDVModifier from './CalendarRDVModifier';


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
class PatientModifierRDV extends Component {
    constructor(props) {
        super(props)
        this.state={

        }
        
        
    }
   
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log(this.state);
        })
    }

   
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
                   <Edit />
                </Button>
                <Dialog open={this.state.open}  onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">modifier rdv</DialogTitle>
                    <DialogContent style={{width:'800px'}}>
                        <form  >

                            <Grid spacing={2} justifyContent='center' container sx={11}>
                                <Grid item>
                                    <CalendarRDVModifier idRDV={this.props.rdv} doc={this.props.doc}/>
                                </Grid>                              
                            </Grid>

                        </form>
                    </DialogContent>

                    {/* <DialogActions>
                        <Button onClick={this.handleSubmit}>modifier</Button>

                        <Button onClick={handleClose} color="primary">
                            Annuler
                        </Button>
                    </DialogActions> */}
                </Dialog>
                
            </div >
        )
    }
}

export default (withStyles(styles)(PatientModifierRDV))
