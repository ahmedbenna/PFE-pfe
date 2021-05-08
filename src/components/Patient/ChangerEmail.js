import React from 'react'
import { Dialog, DialogTitle, DialogActions, DialogContent, Radio, Grid, TextField, Button, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core/';

import { withStyles } from '@material-ui/core/styles';

import { Edit } from '@material-ui/icons';

import moment from 'moment'


import axios from 'axios'


const styles = {
    paper: {
        marginTop: "50px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    /* text:{
         backgroundColor :'#FFFFFF',
         borderRadius:'5px',
     },*/
    btn: {
        backgroundColor: '#1de9b6',
        color: '#FFFFFF',
    },
    formControl: {
        justifyContent: 'center',
        width: 'calc(400px - 5px)',
    },

    link: {
        textDecoration: 'none',
        color: 'rgb(0 35 75)'
    },
}
class ChangerEmail extends React.Component {

    constructor(props) {

        super(props)


        this.state = {
            email: props.email

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        },
        )

    }


    handleSubmit = e => {


        const url = 'http://localhost:8080/api/comptePatients/'+ this.props.id
        axios.put(url, { email: this.state.email })
            .then(res => {
                window.location.reload(false)
                console.log(res)
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
                    <DialogTitle id="form-dialog-title">Changer Email</DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.handleSubmit} style={{ padding: '20px' }}>


                            <TextField
                                className={classes.text}
                                value={this.state.email}
                                onChange={this.handleChange}
                                name='email'
                                label='Changer Email'
                                variant='standard'
                                fullWidth />

                        </form>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.handleSubmit} color="primary">
                            Confermer
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Annuler
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
export default (withStyles(styles)(ChangerEmail))
