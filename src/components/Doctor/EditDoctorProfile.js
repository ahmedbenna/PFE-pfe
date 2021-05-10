import React, { Component } from 'react'

import { TextField, Grid, Container,TextareaAutosize, CssBaseline, Button, FormControl, Select, InputLabel, MenuItem } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import { withRouter } from 'react-router-dom'

import axios from 'axios'

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

class EditDoctorProfile extends Component {
    constructor(props) {
        super(props)
        const doc = JSON.parse(localStorage.getItem('doctorInfo'))
        const url = "http://localhost:8080/api/medecins/" + doc.id
        axios.get(url)
            .then(res => localStorage.setItem('doctorInfo', JSON.stringify(res.data)))
            .catch(err => console.log(err))
        const doctor = JSON.parse(localStorage.getItem('doctorInfo'))
        this.state = {
            specialites: JSON.parse(localStorage.getItem("specialites")),
            villes: JSON.parse(localStorage.getItem("villes")),
            id: doctor.id,
            nom: doctor.nom,
            prenom: doctor.prenom,
            specialite:doctor.specialite.id,
            specialitelibelle:doctor.specialite.libelle,
            
            conact: doctor.conact,
            contactUrgence: doctor.contactUrgence,
            adresse: doctor.adresse,
            ville:  doctor.ville.id,
            villeville: doctor.ville.ville,
            
            email: doctor.email,
            presentation: doctor.presentation,

           
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
        e.preventDefault();
        const data = {
            email: this.state.email,
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
        console.log(data)

        const url = "http://localhost:8080/api/medecins/"+this.state.id
        axios.put(url, data)
            .then(res => {console.log(res)
                const url='http://localhost:8080/api/medecins/'+this.state.id
                axios
                    .get(url)
                    .then(res=>{console.log('getmed',res)
                          localStorage.setItem('doctorInfo', JSON.stringify(res.data))})})
            .catch(err => console.log(err));
    };
    render() {

        const { classes } = this.props;



        return (
            <div>
                <Container component="main" maxWidth="xs" style={{ height: "600px", backgroundColor: '#F0F0F0', borderRadius: "15px" }}>
                    <CssBaseline />
                    <div className={classes.paper}>
                        <form onSubmit={this.handleSubmit} style={{ padding: '20px' }}>
                            <Grid spacing={2} justify='center' container sx={11}>
                                <Grid item xs={12} sm={6}>
                                    <TextField className={classes.text} value={this.state.nom} onChange={this.handleChange} name='nom' label='Nom' variant='standard' fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField className={classes.text} value={this.state.prenom} onChange={this.handleChange} name='prenom' label='Prenom' variant='standard' fullWidth />
                                </Grid>
                                <Grid item>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel >specialite</InputLabel>
                                        <Select
                                            labelId="specialite"
                                            name="specialite"
                                            defaultValue={this.state.specialitelibelle}
                                            value={this.state.specialite}
                                            onChange={this.handleChange}
                                        >
                                            {this.state.specialites.map(specia =>
                                                <MenuItem value={specia.id}> {specia.libelle} </MenuItem >
                                            )}

                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel >Ville</InputLabel>
                                        <Select
                                            labelId="ville"
                                            name="ville"
                                            defaultValue={this.state.villeville}
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
                                    <TextField className={classes.text} value={this.state.email} onChange={this.handleChange} name='email' label='Email' variant='standard' fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField className={classes.text} value={this.state.conact} onChange={this.handleChange} name='conact' label='Conact' variant='standard' fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField className={classes.text} value={this.state.contactUrgence} onChange={this.handleChange} name='contactUrgence' label='ContactUrgence' variant='standard' fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField className={classes.text} value={this.state.adresse} onChange={this.handleChange} name='adresse' label='Address' variant='standard' fullWidth />
                                </Grid>
                                <Grid item xs={12}>
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

                                <Grid item xs={12}>
                                    <Button type='submit' onClick={this.handleSubmit} fullWidth className={classes.btn}>
                                        Enregistrer
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
export default withRouter(withStyles(styles)(EditDoctorProfile))
