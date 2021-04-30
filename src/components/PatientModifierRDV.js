import React, { Component } from 'react'

import { TextField, TextareaAutosize , FormControl, Select, InputLabel, MenuItem, Button,Dialog, DialogTitle, DialogActions, DialogContent, Grid } from '@material-ui/core'
import axios from 'axios'

import { withStyles } from '@material-ui/core/styles';


import {Edit} from '@material-ui/icons'


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
        const pat=props.pat
        const rdv = props.rdv
        this.state = {

            idPat:pat.id,
            idRDV: rdv.id,
            
           
        }
    }
    // componentDidMount() {
    //     this.getVille();
    //     this.getSpecialite();
    // }
    // getVille = () => {
    //     axios
    //         .get("http://localhost:8080/api/villes")
    //         .then(data => {
    //             this.setState({ villes: data.data })
    //             console.log(data)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             return null;
    //         });
    // };
    
    // getSpecialite = () => {
    //     axios
    //         .get("http://localhost:8080/api/specialites")
    //         .then(data => {
    //             this.setState({ specialites: data.data })
    //             console.log(data)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             return null;
    //         });
    // };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log(this.state);
        })
    }

    handleSubmit = e => {
        this.setState({ open: false })
        const data = {
            
        };
        console.log(data)

        const url = "http://localhost:8080/api/rendezvous/"+this.state.idRDV
        axios.put(url, data)
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
                   <Edit />
                </Button>
                <Dialog open={this.state.open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">modifier rdv</DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.handleSubmit} style={{ padding: '20px' }}>

                            <Grid spacing={2} justifyContent='center' container sx={11}>
                                <Grid item>

                                </Grid>                              
                            </Grid>

                        </form>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.handleSubmit}>modifier</Button>

                        <Button onClick={handleClose} color="primary">
                            Annuler
                        </Button>
                    </DialogActions>
                </Dialog>
                
            </div >
        )
    }
}

export default (withStyles(styles)(ModifierMedecin))
