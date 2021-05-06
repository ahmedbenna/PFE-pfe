import React from 'react';
import './MainNav.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../../img/Logo.png'


import { Link } from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  btn :{
    marginLeft :'auto',
},
button:{
  color :'#363768',
},
link:{
    textDecoration: 'none', 
},
appbar:{
  background :'#ffffff',
},


}));



export default function MainNav() {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <AppBar  position="static" className={classes.appbar} >
      <Toolbar>
          <Link to='/'>              
              <img src={logo} height="40" width="40" alt="logo"/>
          </Link>
          <div className={classes.btn}>
            <Link to='/components/LoginDoc'className={classes.link}>
              <Button className={classes.button} >Médecin </Button>
            </Link>
                    
              <Link to='/components/PatientLogin'className={classes.link}> 
              <Button className={classes.button}  >Patient  </Button> 
              </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}