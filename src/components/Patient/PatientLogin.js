import React from 'react'
import { Container, CssBaseline, Grid, Button, Divider } from '@material-ui/core/';
import Login from './Login';
import Signup from './Signup';
import loginImg from '../../img/login.svg'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${loginImg})`,
        backgroundColor: ' #363768',
        height: '800px',
        padding:'20px',
        
    },
}));


export default function PatientLogin() {
    const [conecter, setConnecter] = React.useState(true)
    const classes = useStyles();


    return (
        <div className={classes.container} >
            <Container component="main" maxWidth="xs" style={{ borderRadius: "15px",backgroundColor: '#FFFFFF' }}>
                <CssBaseline />
                <div >
                    <Grid container >
                        <Grid container style={{ marginTop: '20px', }} justify='center'>
                            <Grid item >
                                <Button onClick={() => { setConnecter(true) }}> Se connecter </Button>
                            </Grid>
                            <Grid item >
                                <Button onClick={() => { setConnecter(false) }}> S'inscrire </Button>
                            </Grid>
                        </Grid>
                        <Divider style={{ backgroundColor: '#FFFFFF' }} />
                        <Grid item justify='center'>
                            {
                                (conecter) ?
                                    <Login />
                                    :
                                    <Signup />
                            }
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}
