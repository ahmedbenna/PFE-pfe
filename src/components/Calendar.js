import React, { Component } from 'react'

import { Container, CssBaseline, Grid, Typography, Button } from '@material-ui/core/';

import { withStyles } from '@material-ui/core/styles';

import axios from 'axios'

import moment from 'moment'
import 'moment/locale/fr'
import { Link, useHistory  } from 'react-router-dom'


const styles = {
    container: {

    },
    link: {
        textDecoration: 'none',
    },
};

class Calendar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dispo: [],

            d0: new Date(),

            d1: new Date(),
            d2: new Date(),
            d3: new Date(),
            d4: new Date(),
            d5: new Date(),
        }
        this.state.d1.setDate(this.state.d1.getDate() + 1)
        this.state.d2.setDate(this.state.d2.getDate() + 2)
        this.state.d3.setDate(this.state.d3.getDate() + 3)
        this.state.d4.setDate(this.state.d4.getDate() + 4)
        this.state.d5.setDate(this.state.d5.getDate() + 5)
        // localStorage.removeItem("dispo")
        const url = 'http://localhost:8080/api/medecins/' + props.doc.id + '/disponibilitesAll'

        axios.get(url)
            .then(res => {
                console.log("dispo", res)
                this.setState({ dispo: res.data })
            })

            .catch(err => { console.log(err) })

        // const disponibilites=JSON.parse(localStorage.getItem("dispo"))
        // console.log("dissss",disponibilites.dateTime)




    }
    handleRDV (dispo) {
        localStorage.removeItem("dispo")
        localStorage.setItem("dispo",JSON.stringify(dispo))
        // localStorage.setItem("med",JSON.stringify(this.props.doc))
        // this.props.history.push('/components/ConfermerRDV')

    }

    render() {
        console.log(this.state)
        const { classes } = this.props;
        moment.locale('fr')


        return (
            <div>
                <CssBaseline>
                    <Container className={classes.container}>
                        <div>
                            {(this.state.dispo) ? (
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Grid spacing={1} container>

                                            <Grid item>
                                                <Typography> {moment(this.state.d0).format('dddd')} </Typography>
                                                <Typography> {moment(this.state.d0).format("MMM D")}</Typography>
                                                <Grid container direction='column'>
                                                    {
                                                        this.state.dispo.map(diss =>
                                                            (moment(diss.dateTime).isSame(this.state.d0, "day")) ?
                                                            (
                                                           
                                                                <Link onClick={()=> this.handleRDV(diss)} to='/components/ConfermerRDV' >
                                                                    <Grid item>
                                                                        <Button onClick={()=> this.handleRDV(diss)}>
                                                                            <Typography > {moment(diss.dateTime).format('hh:mm')}</Typography>
                                                                        </Button>
    
                                                                    </Grid>
                                                                </Link>
                                                               
                                                                ) : ('')

                                                        )}
                                                </Grid>
                                            </Grid>

                                            <Grid item>
                                                <Typography> {moment(this.state.d1).format('dddd')} </Typography>
                                                <Typography> {moment(this.state.d1).format("MMM D")}</Typography>
                                                <Grid container direction='column'>
                                                    {
                                                        this.state.dispo.map(diss =>

                                                            (moment(diss.dateTime).isSame(this.state.d1, "day")) ?
                                                            (
                                                           
                                                            <Link onClick={()=> this.handleRDV(diss)} to='/components/ConfermerRDV' >
                                                                <Grid item>
                                                                    <Button onClick={()=> this.handleRDV(diss)}>
                                                                        <Typography > {moment(diss.dateTime).format('hh:mm')}</Typography>
                                                                    </Button>

                                                                </Grid>
                                                            </Link>
                                                           
                                                            ) : ('')

                                                        )}

                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Typography> {moment(this.state.d2).format('dddd')} </Typography>
                                                <Typography> {moment(this.state.d2).format("MMM D")}</Typography>
                                                <Grid container direction='column'>
                                                    {
                                                        this.state.dispo.map(diss =>
                                                            (moment(diss.dateTime).isSame(this.state.d2, "day")) ?
                                                            (
                                                           
                                                                <Link onClick={()=> this.handleRDV(diss)} to='/components/ConfermerRDV' >
                                                                    <Grid item>
                                                                        <Button onClick={()=> this.handleRDV(diss)}>
                                                                            <Typography > {moment(diss.dateTime).format('hh:mm')}</Typography>
                                                                        </Button>
    
                                                                    </Grid>
                                                                </Link>
                                                               
                                                                ) : ('')

                                                        )}
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Typography> {moment(this.state.d3).format('dddd')} </Typography>
                                                <Typography> {moment(this.state.d3).format("MMM D")}</Typography>
                                                <Grid container direction='column'>
                                                    {
                                                        this.state.dispo.map(diss =>
                                                            (moment(diss.dateTime).isSame(this.state.d3, "day")) ?
                                                            (
                                                           
                                                                <Link onClick={()=> this.handleRDV(diss)} to='/components/ConfermerRDV' >
                                                                    <Grid item>
                                                                        <Button onClick={()=> this.handleRDV(diss)}>
                                                                            <Typography > {moment(diss.dateTime).format('hh:mm')}</Typography>
                                                                        </Button>
    
                                                                    </Grid>
                                                                </Link>
                                                               
                                                                ) : ('')

                                                        )}
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Typography> {moment(this.state.d4).format('dddd')} </Typography>
                                                <Typography> {moment(this.state.d4).format("MMM D")}</Typography>
                                                <Grid container direction='column'>
                                                    {
                                                        this.state.dispo.map(diss =>
                                                            (moment(diss.dateTime).isSame(this.state.d4, "day")) ?
                                                            (
                                                           
                                                                <Link onClick={()=> this.handleRDV(diss)} to='/components/ConfermerRDV' >
                                                                    <Grid item>
                                                                        <Button onClick={()=> this.handleRDV(diss)}>
                                                                            <Typography > {moment(diss.dateTime).format('hh:mm')}</Typography>
                                                                        </Button>
    
                                                                    </Grid>
                                                                </Link>
                                                               
                                                                ) : ('')

                                                        )}
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Typography> {moment(this.state.d5).format('dddd')} </Typography>
                                                <Typography> {moment(this.state.d5).format("MMM D")}</Typography>
                                                <Grid container direction='column'>
                                                    {
                                                        this.state.dispo.map(diss =>
                                                            (moment(diss.dateTime).isSame(this.state.d5, "day")) ?
                                                            (
                                                           
                                                                <Link onClick={()=> this.handleRDV(diss)} to='/components/ConfermerRDV' >
                                                                    <Grid item>
                                                                        <Button onClick={()=> this.handleRDV(diss)}>
                                                                            <Typography > {moment(diss.dateTime).format('hh:mm')}</Typography>
                                                                        </Button>
    
                                                                    </Grid>
                                                                </Link>
                                                               
                                                                ) : ('')

                                                        )}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                   
                                </Grid>
                            ) : (<Typography>vide</Typography>)
                            }
                        </div>
                    </Container>
                </CssBaseline>
            </div>
        )
    }
}
export default withStyles(styles)(Calendar)
