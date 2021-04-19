import React, { Component } from 'react'

import { Container, CssBaseline, Grid, Typography } from '@material-ui/core/';

import { withStyles } from '@material-ui/core/styles';

import moment from 'moment'
import 'moment/locale/fr'


const styles = {
    container: {

    }
};

class Calendar extends Component {
    
    constructor(props) {
        const url('')
        axios.get()
        super(props);

       
        this.state = {
            
            d0: new Date (today),
            
            d1: new Date(today),
            d2: new Date(today),
            d3: new Date(today),
            d4: new Date(today),
            d5: new Date(today),


        };
        console.log("")

    }

    render() {
        const { classes } = this.props;
        moment.locale('fr')
        this.state.d1.setDate(this.state.d1.getDate() +1)
        this.state.d2.setDate(this.state.d2.getDate() +2)
        this.state.d3.setDate(this.state.d3.getDate() +3)
        this.state.d4.setDate(this.state.d4.getDate() +4)
        this.state.d5.setDate(this.state.d5.getDate() +5)

        return (
            <div>
                <CssBaseline>
                    <Container className={classes.container}>
                        <div>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Grid spacing={2} container>
                                        <Grid item>
                                            <Typography> {moment(this.state.d0).format('dddd')} </Typography>
                                            <Typography> {moment(this.state.d0).format("MMM D")}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography> {moment(this.state.d1).format('dddd')} </Typography>
                                            <Typography> {moment(this.state.d1).format("MMM D")}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography> {moment(this.state.d2).format('dddd')} </Typography>
                                            <Typography> {moment(this.state.d2).format("MMM D")}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography> {moment(this.state.d3).format('dddd')} </Typography>
                                            <Typography> {moment(this.state.d3).format("MMM D")}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography> {moment(this.state.d4).format('dddd')} </Typography>
                                            <Typography> {moment(this.state.d4).format("MMM D")}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography> {moment(this.state.d5).format('dddd')} </Typography>
                                            <Typography> {moment(this.state.d5).format("MMM D")}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {this.state.dispo}
                                <Grid item>

                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </CssBaseline>
            </div>
        )
    }
}
export default withStyles(styles)(Calendar)
