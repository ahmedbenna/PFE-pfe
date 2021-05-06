import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import confirmed from '../../img/RdvConfirmed.svg'
import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';



const styles = {

    link: {
        textDecoration: 'none',
        color: 'rgb(0 35 75)'
    },
    div:{
        textAlign: 'center',

    }

};

class RdvComplited extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.div}>
                <Grid style={{paddingTop:'50px'}} spacing={2} direction='column' justify='center' alignContent='center' container>
                    <Grid item>
                        <Typography variant='h4'>Voter Rendez-vous est confermer</Typography>
                    </Grid>
                    <Grid style={{paddingTop:'50px'}} item>
                        <img style={{height:'400px'}}  src={confirmed}/>
                    </Grid>
                    <Grid>
                        <Link className={classes.link} to='/components/PatientProfile'>
                            <Typography>Retourner au proflie</Typography>
                        </Link>
                    </Grid>
                    
                </Grid>
               
            </div>
        )
    }
}
export default withStyles(styles)(RdvComplited)
