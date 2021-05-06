import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';

import confirmed from '../../img/signupConfermer.svg'
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
class PatientSignupComplited extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.div}>
                <Grid style={{ paddingTop: '50px' }} spacing={2} direction='column' justify='center' alignContent='center' container>
                    <Grid item>
                        <Typography variant='h4'>Voter inscription est confermer</Typography>
                    </Grid>
                    <Grid style={{ paddingTop: '50px' }} item>
                        <img style={{ height: '400px' }} src={confirmed} />
                    </Grid>
                    <Grid>
                        <Link className={classes.link} to='/components/PatientProfile'>
                            <Typography>Acceder a mon proflie</Typography>
                        </Link>
                    </Grid>

                </Grid>

            </div>
        )
    }
}
export default withStyles(styles)(PatientSignupComplited)

