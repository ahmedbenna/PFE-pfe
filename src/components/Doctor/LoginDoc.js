import React from 'react';
import {Button, CssBaseline, TextField, Grid, Container, Typography  } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom'

import loginImg from '../../img/login.svg'


import axios from 'axios'



const styles = {
  container: {
    backgroundImage: `url(${loginImg})`,
    backgroundColor: ' #363768',
    height: '500px',
    padding:'20px',
    
},
  paper: {
    padding:'10px',
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
    marginTop:'20px',
    marginBottom :'20px',
    color: '#FFFFFF',
    // backgroundColor :'#2196F3',
  },
  link:{
    textDecoration: 'none', 
    color: '#616161',
  },
  demande:{
    padding:'5px',
  },
 



}

class LoginDoc extends React.Component {

  constructor() {
    super();
    this.state = {
      email:'',
      password:'',
     
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value},()=>{
      console.log(this.state);
    })
  }
  handleSubmit = e => {
    e.preventDefault()

    const data = {
     
      email: this.state.email,
      motDePasse: this.state.password,
    }

    console.log(this.state)
    axios.post('',data)
    .then (response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
    axios.get('')
    .then (response => {
      localStorage.setItem('docInfo',response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }



  render(){
      const {classes} = this.props;
  return (
    <div className={classes.container}>
    <Container component="main" maxWidth="xs" style={{ backgroundColor: '#FFFFFF',borderRadius: "15px"}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Se connecter
        </Typography>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <Grid container>
            
          </Grid>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={this.state.email}
            onChange={this.handleChange}
            id="email"
            label="Address Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            label="Mote de passe"
            type="password"
            id="password"
            autoComplete="current-password"
          /> 
          
            <Button
            color='secondary'
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
            >
                Se connecter
            </Button>
          
        </form>
      </div>
    </Container>
    <Container maxWidth="xs" style={{ backgroundColor: '#FFFFFF',borderRadius: "15px"}}>
      <div className={classes.paper}>
        <Typography className={classes.demande} variant="h6">
          Vous êtes praticien ? 
        </Typography>
        <Link className={classes.link} to='/components/DoctorSignup'>
          <Typography className={classes.demande} variant="body">
            Joindre nous
          </Typography>
        </Link>
        
      </div>
    </Container>

    
  </div>
  );
}
}
export default  withStyles(styles)(LoginDoc)