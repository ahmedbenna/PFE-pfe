import React from 'react';


import { makeStyles } from '@material-ui/core/styles';

import {Menu, MenuItem, Button, Toolbar, AppBar, CssBaseline} from '@material-ui/core/';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';


import { Link } from 'react-router-dom'
import logo from '../../img/Logo.png'




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
  link:{
      textDecoration: 'none', 
  },
  appbar:{
    background :'#0075A4',
  },


}));



export default function PatientNav(props) {
  const classes = useStyles();
  const { nom, prenom} = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleopenmenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  const handledeconnecter = () => {
    setAnchorEl(null);
    window.location.reload(false)
    localStorage.removeItem('patientInfo')
  };

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <AppBar position="static" className={classes.appbar} >
      <Toolbar>
          <Link to='/'>              
              <img src={logo} height="40" width="40" alt="logo"/>
          </Link>
          <div  className={classes.btn}>
            
            <Button style={{color:'#FFFFFF'}} onClick={handleopenmenu} ><AccountCircleIcon />{props.nom} {props.prenom}</Button> 
            <Menu
              id="Patients-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to='/components/PatientProfile'className={classes.link}> 
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Link>
              
              <MenuItem onClick={handledeconnecter}>Se deconnecter</MenuItem>
              
            </Menu> 

          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}