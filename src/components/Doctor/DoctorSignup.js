import React, { Component } from 'react'

import { Button, CssBaseline, TextareaAutosize, TextField, Grid, Container, Typography, FormControl, MenuItem, Select, InputLabel } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import {LocationOn, Today} from '@material-ui/icons';

import axios from 'axios'
import loginImg from '../../img/login.svg'




const styles = {
    container: {
        backgroundImage: `url(${loginImg})`,
        backgroundColor: ' #363768',
        height: '900px',
        padding: '20px',

    },
    paper: {
        marginTop: '10px',
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
        marginTop: '20px',
        marginBottom: '20px',
        color: '#FFFFFF',
        // backgroundColor: '#2196F3',
    },
    link: {
        textDecoration: 'none',
        color: '#616161',
    },
    formControl: {
        justifyContent: 'center',
        width: 'calc(400px - 5px)',
    },

    presentation: {
        width: '400px',
        borderRadius: '5px',
        backgroundColor: '#F0F0F0',
        borderColor: '#bdbdbd',

    },
    text:{
        padding:'20px',

    }

}

class DoctorSignup extends Component {
    constructor() {
        super();
        this.state = {
            nom: '',
            prenom: '',
            email: 'a@.com',
            motDePasse: 'a',
            confirmPassword: 'a',
            villes: JSON.parse(localStorage.getItem("villes")),
            ville: '',
            conact: '11111',
            adresse: 'dje',
            contactUrgence: '12222',
            specialites: JSON.parse(localStorage.getItem("specialites")),
            specialite: '',
            presentation: 'dasdsddsfqdf',

        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {

        })
    }
    getMed (id){
        const url='http://localhost:8080/api/medecins/'+id
        axios
            .get(url)
            .then(res=>{console.log('getmed',res)
                  localStorage.setItem('doctorInfo', JSON.stringify(res.data))})
       
      }

    handleSubmit = e => {
        e.preventDefault()

        const data = {
            email: this.state.email,
            motDePasse: this.state.motDePasse,
            nom: this.state.nom,
            prenom: this.state.prenom,
            adresse: this.state.adresse,
            ville: {
                id: this.state.ville
            },
            conact: this.state.conact,
            contactUrgence: this.state.contactUrgence,
            presentation: this.state.presentation,
            specialite: {
                id: this.state.specialite
            }
        };
        axios.post("http://localhost:8080/api/medecins", data)
            .then(res => {
                this.getMed(res.data.id)
               
                this.props.history.push('/')
                window.location.reload(false)
            })
            .catch(err => console.log(err))

        // window.location.reload(false)

    }
    render() {
        const { classes } = this.props;
        console.log("ville", this.state.ville)
        console.log("speccc", this.state.specialite)



        return (
            <div className={classes.container} >
                <Grid container>
                    <Grid item xs={12} md={7}>
                        <div className={classes.text}>
                            <Typography style={{color: '#FFFFFF',marginBottom:'20px'}} variant='h3'>                              
                                Il est temps de vous trouver!
                            </Typography>
                            <Typography style={{color: '#FFFFFF',marginBottom:'20px'}} variant='h5'>
                                texttexttexttexttexttexttexttexttexttexttexttext
                            </Typography>

                            <Typography  style={{color: '#fff02a'}} variant='h5'>
                               <LocationOn/> Laissez les patients vous trouver!
                            </Typography>
                            <Typography style={{color: '#FFFFFF',marginLeft:'30px',marginBottom:'20px'}} variant='body2'>
                                texttexttexttext
                            </Typography>

                            <Typography  style={{color: '#fff02a'}} variant='h5'>
                               <Today/> Gérez facilement les réservations
                            </Typography>
                            <Typography style={{color: '#FFFFFF',marginLeft:'30px',marginBottom:'20px'}} variant='body2'>
                                texttexttexttext
                            </Typography>
                            

                        </div>
                    </Grid>
                    <Grid item>
                        <Container component="main" maxWidth="xs" style={{ backgroundColor: '#FFFFFF', borderRadius: "15px" }}>
                            <CssBaseline />
                            <div className={classes.paper}>
                                <Typography component="h1" variant="h5">
                                    Joindre nous
                        </Typography>
                                <form className={classes.form} onSubmit={this.handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="prenom"
                                                name="prenom"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="prenom"
                                                label="Prenom"
                                                value={this.state.prenom}
                                                onChange={this.handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="nom"
                                                label="Nom"
                                                name="nom"
                                                value={this.state.nom}
                                                onChange={this.handleChange}

                                            />
                                        </Grid>
                                        <Grid item>
                                            <FormControl variant="outlined" className={classes.formControl}>
                                                <InputLabel >specialite</InputLabel>
                                                <Select
                                                    labelId="specialite"
                                                    name="specialite"
                                                    value={this.state.specialite}
                                                    onChange={this.handleChange}
                                                >
                                                    {this.state.specialites.map(specia =>
                                                        <MenuItem value={specia.id}> {specia.libelle} </MenuItem >
                                                    )}

                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="email"
                                                label="adresse Email"
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                name="motDePasse"
                                                label="Mote de passe"
                                                type="password"

                                                value={this.state.motDePasse}
                                                onChange={this.handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                name="confirmPassword"
                                                label="Confirmer mote de passe"
                                                type="password"
                                                id="confirmPassword"
                                                value={this.state.confirmPassword}
                                                onChange={this.handleChange}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <FormControl variant="outlined" className={classes.formControl}>
                                                <InputLabel >Ville</InputLabel>
                                                <Select
                                                    labelId="villes"
                                                    name="ville"
                                                    value={this.state.ville}
                                                    onChange={this.handleChange}
                                                >
                                                    {this.state.villes.map(vill =>
                                                        <MenuItem value={vill.id}> {vill.ville} </MenuItem >
                                                    )}

                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                name="adresse"
                                                label="adresse"
                                                id="adresse"
                                                value={this.state.adresse}
                                                onChange={this.handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                name="conact"
                                                label="Conact"
                                                type="number"
                                                value={this.state.conact}
                                                onChange={this.handleChange}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                label="Contact Urgence"
                                                name="contactUrgence"
                                                value={this.state.contactUrgence}
                                                onChange={this.handleChange}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <TextareaAutosize
                                                rowsMin={3}
                                                variant="outlined"
                                                required
                                                fullWidth
                                                placeholder="Presentez vous"
                                                aria-label="Presentation"
                                                name="presentation"
                                                className={classes.presentation}
                                                value={this.state.presentation}
                                                onChange={this.handleChange}
                                            />
                                        </Grid>




                                        <Grid item xs>
                                            <Button
                                                color='secondary'
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                onClick={this.handleSubmit}
                                                className={classes.submit}
                                            >
                                                Envoyer un demande
                                    </Button>
                                        </Grid>
                                    </Grid>

                                </form>
                            </div>
                        </Container>

                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(DoctorSignup)