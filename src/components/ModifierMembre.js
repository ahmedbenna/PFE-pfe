import React from 'react'
import { Dialog, DialogTitle, DialogActions, DialogContent, Radio,  Grid, TextField,  Button, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core/';

import { withStyles } from '@material-ui/core/styles';

import {Edit} from '@material-ui/icons';

import moment from 'moment'

import { withRouter } from 'react-router-dom'

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
class ModifierMembre extends React.Component {

    constructor(props) {
        
        super(props)
        // let patientData = localStorage.getItem('patientInfo');
        // patientData = JSON.parse(patientData);
        this.state = {
            id: this.props.id,
            nom: this.props.nom,
            prenom: this.props.prenom,
            genre: this.props.genre,
            dateDeNaissance: moment(this.props.dateDeNaissance).calendar(),
            telephone: this.props.telephone,
            adresse: this.props.adresse,
            // patient: JSON.parse(localStorage.getItem("patientInfo"))

        }
        console.log("idddddd",this.state.id)

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
        e.preventDefault()
        console.log(this.state)
        const data = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            dateDeNaissance: this.state.dateDeNaissance,
            adresse: this.state.adresse,
            telephone: this.state.telephone,
            genre: this.state.genre
        };
        console.log(data)

        console.log("pppppppppppp", this.state.id)


        const url = 'http://localhost:8080/api/patients/'+this.state.id
        axios.put(url, data)
            .then(res => console.log(res))
            .catch(err => console.log(err));


    };
    render() {
        const { classes } = this.props;

        //   const [open, setOpen] = React.useState(false);

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
                    <DialogTitle id="form-dialog-title">modifier membre</DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.handleSubmit} style={{ padding: '20px' }}>

                            <Grid spacing={2} justifyContent='center' container sx={11}>
    
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        className={classes.text}
                                        value={this.state.nom}
                                        onChange={this.handleChange}
                                        name='nom'
                                        label='Nom'
                                        variant='standard'
                                        fullWidth />
                                </Grid>
                                <Grid item sm={6}>
                                    <TextField
                                        className={classes.text}
                                        value={this.state.prenom}
                                        onChange={this.handleChange}
                                        name='prenom'
                                        label='Prenom'
                                        variant='standard'
                                        fullWidth />
                                </Grid>


                                <Grid item xs={12}>
                                    <TextField
                                        className={classes.text}
                                        value={this.state.telephone}
                                        onChange={this.handleChange}
                                        name='telephone'
                                        label='Telephone'
                                        variant='standard'
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        className={classes.text}
                                        value={this.state.adresse}
                                        onChange={this.handleChange}
                                        name='adresse'
                                        label='Address'
                                        variant='standard'
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="standard"
                                        required
                                        onChange={this.handleChange}
                                        value={this.state.dateDeNaissance}
                                        fullWidth
                                        defaultValue={this.state.dateDeNaissance}
                                        name="dateDeNaissance"
                                        type="date"
                                        id="dateDeNaissance"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend" >Genre</FormLabel>
                                        <RadioGroup aria-label="gender" name="genre" value={this.state.genre} onChange={this.handleChange}>
                                            <FormControlLabel value="femme" control={<Radio />} label="Femme" />
                                            <FormControlLabel value="homme" control={<Radio />} label="Homme" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                {/* <Grid item xs={12}>
                                    <Button type='submit' onClick={this.handleChange} fullWidth className={classes.btn}>
                                        Enregistrer
                                    </Button>

                                </Grid> */}
                            </Grid>

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
export default withRouter(withStyles(styles)(ModifierMembre))
