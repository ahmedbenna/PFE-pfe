import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { Container, Radio, Typography, Grid, TextField, CssBaseline, Button, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core/';



import 'date-fns';


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
    
    margin: '20px',
    color: '#FFFFFF',
    // backgroundColor: '#2196F3',
  },
  link: {
    textDecoration: 'none',
    color: '#616161',
  }
}

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      motDePasse: '',
      nom: '',
      prenom: '',
      gener: '',
      dateDeNaissance: '',
      telephone: '',
      adresse: '',
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

  getPat (id){
    const url='http://localhost:8080/api/comptePatients/'+id
    axios
        .get(url)
        .then(res=>{console.log('getmed',res)
              localStorage.setItem('patientInfo', JSON.stringify(res.data))})
   
  }
  handleSubmit = e => {
    e.preventDefault()
    const data = {
      email: this.state.email,
      motDePasse: this.state.motDePasse,
      patientPrincipal: {
        nom: this.state.nom,
        prenom: this.state.prenom,
        genre: this.state.gener,
        adresse: this.state.adresse,
        dateDeNaissance: this.state.dateDeNaissance,
        telephone: this.state.telephone
      }

    };
    




    axios.post('http://localhost:8080/api/comptePatients', data)
      .then(res =>{
        this.getPat(res.data.id)
        this.props.history.push('/')

      }
      )
      .catch(err => console.log(err))

      // window.location.reload(false)
  };

  render() {
    const { classes } = this.props;
    console.log()


    return (
      <div>
        <Container component="main" maxWidth="xs" style={{ backgroundColor: '#FFFFFF', borderRadius: "15px" }}>
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
            
              S'inscrire
          </Typography>
            <form  className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="prenom"
                    variant="outlined"
                    required
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
                    variant="outlined"
                    required
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
                    variant="outlined"
                    required
                    fullWidth
                    onChange={this.handleChange}
                    value={this.state.email}
                    id="email"
                    label="adresse Email"
                    name="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    onChange={this.handleChange}
                    value={this.state.motDePasse}
                    name="motDePasse"
                    label="mote de passe"
                    type="password"
                    id="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
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
                    variant="outlined"
                    required
                    fullWidth
                    onChange={this.handleChange}
                    value={this.state.adresse}
                    name="adresse"
                    label="adresse"
                    id="adresse"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="date"
                    label="Date de naissance"
                    type="date"
                    name="dateDeNaissance"
                    fullWidth
                    onChange={this.handleChange}
                    value={this.state.dateDeNaissance}

                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend" >genre</FormLabel>
                    <RadioGroup aria-label="gender" name="gener" value={this.state.gener} onChange={this.handleChange}>
                      <FormControlLabel value="femme" control={<Radio />} label="Femme" />
                      <FormControlLabel value="homme" control={<Radio />} label="Homme" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                color='secondary'
                type="submit"
                fullWidth
                onClick={this.handleSubmit}
                variant="contained"
                className={classes.submit}
              >
                S'inscrire
            </Button>
            </form>
          </div>
        </Container>

      </div>
    );
  }
}
export default withStyles(styles)(Signup)