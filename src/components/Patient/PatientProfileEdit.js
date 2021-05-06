import React from 'react';
import { Dialog, DialogTitle, DialogActions, DialogContent, Radio, Grid, TextField, Button, RadioGroup, FormControlLabel, FormControl, FormLabel, Container } from '@material-ui/core/';
import DateFnsUtils from '@date-io/date-fns';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { withStyles } from '@material-ui/core/styles';

import { withRouter } from 'react-router-dom'
import axios from 'axios'

const styles = {
    paper: {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    avatar: {
        margin: '10px',

    },
    form: {
        width: '100%',
        marginTop: '10px',
    },
    submit: {
        margin: '10px',
        color: '#FFFFFF',
        backgroundColor: '#2196F3',
    },
    link: {
        textDecoration: 'none',
        color: '#616161',
    },
    btn: {
        backgroundColor: '#F6836D',
        color: '#FFFFFF',
    },
}

class PatientProfileEdit extends React.Component {
    constructor(props) {
        const patient = JSON.parse(localStorage.getItem('patientInfo'))
        super(props)
        this.state = {
            // patient :JSON.parse(localStorage.getItem('patientInfo')),
            id: patient.id,
            motDePasse: patient.motDePasse,
            idPatientPrincipal: patient.patientPrincipal.id,
            nom: patient.patientPrincipal.nom,
            prenom: patient.patientPrincipal.prenom,
            genre: patient.patientPrincipal.genre,
            dateDeNaissance: patient.patientPrincipal.dateDeNaissance,
            telephone: patient.patientPrincipal.telephone,
            adresse: patient.patientPrincipal.adresse,
            open: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    /*useEffect(() => {
      if (localStorage.getItem('patientInfo')) {
        history.push()
      }
    })*/

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log(this.state)
        }

        )

    }


    handleSubmit = e => {
        e.preventDefault();
        const data = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            genre: this.state.genre,
            adresse: this.state.adresse,
            dateDeNaissance: this.state.dateDeNaissance,
            telephone: this.state.telephone
        };


        const url = 'http://localhost:8080/api/patients/'+this.state.idPatientPrincipal
        axios.put(url, data)
            .then(res =>{ axios.get('http://localhost:8080/api/patients/'+this.state.id)
                                      .then(res=> {localStorage.setItem('patientInfo',res.data)})
                                                                    
                        window.location.reload(false)})
            .catch(err => console.log(err))
    };

    render() {
        console.log(this.state.patient)
        const { classes } = this.props;
        console.log(localStorage.getItem('patientInfo'))

        //   const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {
            this.setState({ open: true });
        };

        const handleClose = () => {
            this.setState({ open: false });
        };


        return (
            <div>
                {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Modifier profile
        </Button>
                <Dialog open={this.state.open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Mon profil</DialogTitle>
                    <DialogContent> */}
                <Container component="main" maxWidth="xs" style={{ height: "550px", backgroundColor: '#F0F0F0', borderRadius: "15px" }}>

                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="prenom"
                                    variant="standard"

                                    onChange={this.handleChange}
                                    value={this.state.prenom}
                                    fullWidth
                                    id="prenom"
                                    label="Prenom"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="standard"

                                    fullWidth
                                    onChange={this.handleChange}
                                    value={this.state.nom}
                                    id="nom"
                                    label="Nom"
                                    name="nom"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="standard"

                                    fullWidth
                                    onChange={this.handleChange}
                                    value={this.state.telephone}
                                    name="telephone"
                                    label="telephone"
                                    type="number"
                                    id="telephone"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="standard"

                                    fullWidth
                                    onChange={this.handleChange}
                                    value={this.state.adresse}
                                    name="adresse"
                                    label="adresse"
                                    id="adresse"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        label="Date de naissance"

                                        onChange={this.handleChange}
                                        value={this.state.dateDeNaissance}
                                        fullWidth
                                        name="dateDeNaissance"
                                        id="dateDeNaissance"
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>


                            </Grid>
                            <Grid item xs={12}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend" >genre</FormLabel>
                                    <RadioGroup aria-label="gender" name="genre" value={this.state.genre} onChange={this.handleChange}>
                                        <FormControlLabel value="femme" control={<Radio />} label="Femme" />
                                        <FormControlLabel value="homme" control={<Radio />} label="Homme" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Button type='submit' onClick={this.handleSubmit} fullWidth className={classes.btn}>
                                Enregistrer
                                    </Button>

                        </Grid>


                    </form>
                </Container>
                {/* </DialogContent>

                    <DialogActions>
                        <Button onClick={this.handleSubmit} color="primary">
                            Confermer
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Annuler
                        </Button>
                    </DialogActions>
                </Dialog> */}
            </div>
        );
    }
}
export default withRouter(withStyles(styles)(PatientProfileEdit))
