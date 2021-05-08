import React from 'react'
import { TextField, Grid, Container, CssBaseline, Button, Typography, Radio, FormControl, RadioGroup, FormControlLabel, FormLabel } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import { withRouter } from 'react-router-dom'

import axios from 'axios'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


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
        backgroundColor: '#F6836D',
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
class AjouterMember extends React.Component {

    constructor(props) {
        super(props)
        // let patientData = localStorage.getItem('patientInfo');
        // patientData = JSON.parse(patientData);
        this.state = {
            nom: '',
            prenom: '',
            genre: '',
            dateDeNaissance: '',
            telephone: '',
            adresse: '',
            patient: JSON.parse(localStorage.getItem("patientInfo"))

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

        console.log("pppppppppppp", this.state.patient.id)


        const url = 'http://localhost:8080/api/comptePatients/' + this.state.patient.id + '/patients'
        axios.post(url, data)
            .then(res => console.log(res))
            .catch(err => console.log(err));


    };
    render() {
        const { classes } = this.props;
        console.log(this.state)

        return (
            <div>
                <Container component="main" maxWidth="xs" style={{ height: "550px", backgroundColor: '#F0F0F0', borderRadius: "15px" }}>
                    <CssBaseline />
                    <div className={classes.paper}>
                        <form onSubmit={this.handleSubmit} style={{ padding: '20px' }}>

                            <Grid spacing={2} justifyContent='center' container sx={11}>
                                <Grid item xs={12} >
                                    <Typography variant="h5">
                                        Ajouter un membre
                            </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        className={classes.text}
                                        value={this.state.nom}
                                        onChange={this.handleChange}
                                        name='nom'
                                        label='Nom'
                                        variant='standard'
                                        required
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
                                        required
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
                                        required
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
                                        required
                                        fullWidth />
                                </Grid>
                              
                                <Grid item xs={12}>
                                    <TextField
                                        variant="standard"
                                        required
                                        onChange={this.handleChange}
                                        value={this.state.dateDeNaissance}
                                        fullWidth
                                        name="dateDeNaissance"
                                        type="date"
                                        helperText="Date de naissance"
                                        id="dateDeNaissance"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend" >Genre</FormLabel>
                                        <RadioGroup aria-label="gender" name="genre" value={this.state.genre} onChange={this.handleChange}>
                                            <FormControlLabel value="femme" control={<Radio style={{ color: '#0075A4' }} />} label="Femme" />
                                            <FormControlLabel value="homme" control={<Radio style={{ color: '#0075A4' }} />} label="Homme" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type='submit' onClick={this.handleChange} fullWidth className={classes.btn}>
                                        Ajouter
                                    </Button>

                                </Grid>
                            </Grid>

                        </form>
                    </div>
                </Container>
            </div>
        )
    }
}
export default withRouter(withStyles(styles)(AjouterMember))
