import React, { Component } from 'react'

import { Grid, Typography, Divider, Button, Dialog, DialogActions, DialogContent } from '@material-ui/core'
import MemberFamille from './MemberFamille'
import { Clear } from '@material-ui/icons';

import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import axios from 'axios'



const styles = {

    link: {
        textDecoration: 'none',
        color: 'rgb(0 35 75)'
    },

};


class MembreDelete extends Component {
    constructor(props) {

        super(props)
        this.state = {
            id: this.props.id,
            open:false,
        }
        console.log(this.state.id)
    }
    // componentDidMount() {
    //     const url = 'http://localhost:8080/api/comptePatients/' + this.state.patient.id + '/patients'
    //     console.log("memberisssssddddddd", this.state.patient.id)
    //     axios.get(url)
    //         .then(res => {
    //             console.log("membre :", res.data);
    //             this.setState({ members: res.data });

    //         }
    //         )
    // }
    handleDelete = e => {
        const url = 'http://localhost:8080/api/patients/' + this.state.id
        axios.delete(url)
            .then(res => { console.log(res) 
                window.location.reload(false)})
            .catch(err => { console.log(err) })
        this.setState({ open: false })

    }

    render() {
        const { classes } = this.props;
        // const patient = JSON.parse(localStorage.getItem('patientInfo'))
        // console.log("memmmmmmm", this.state.members)

        const handleClickOpen = () => {
            this.setState({ open: true });
        };

        const handleClose = () => {
            this.setState({ open: false });
        };

        return (
            <div className={classes.contaier}>






                <div>
                    <Button just on onClick={handleClickOpen}><Clear /></Button>

                    <Dialog open={this.state.open} onClose={handleClose} aria-labelledby="form-dialog-title">

                        <DialogContent>
                            <Typography> supprimer {this.props.nom} {this.props.prenom} ?</Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleDelete} color="primary">
                                Confermers
                                            </Button>
                            <Button onClick={handleClose} color="primary">
                                Annuler
                                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>





            </div>
        )
    }
}
export default withStyles(styles)(MembreDelete)