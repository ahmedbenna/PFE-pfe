import React, { Component } from 'react'

import { Container, CssBaseline, Grid, Typography, Button } from '@material-ui/core/';

import { withStyles } from '@material-ui/core/styles';
import { NavigateNext, NavigateBefore } from '@material-ui/icons';

import axios from 'axios'

import moment from 'moment'
import 'moment/locale/fr'
import { Link, useHistory } from 'react-router-dom'


const styles = {
    container: {

    },
    link: {
        textDecoration: 'none',
    },
};

class CalendarRDVModifier extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dispo: [],
            counter: 0,

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
        const url = 'http://localhost:8080/api/medecins/' + props.doc.id + '/disponibilitesAll'

        axios.get(url)
            .then(res => {
                console.log("dispo", res)
             
                
                const newarr = res.data.sort((a, b) => {
                    return moment(a.dateTime).diff(b.dateTime);
                  });
                console.log("razzrazeazezaeae",newarr)
                this.setState({ dispo: newarr })
            })

            .catch(err => { console.log(err) })

     


    }


    handleRDV(idd) {
        const url='http://localhost:8080/api/rendezvous/'+this.props.idRDV
        axios
                .put(url,{disponibilite: {id:idd}})
                .then(res=>{console.log('modifier RDVVVV',res)
                            window.location.reload(false)})
                .catch(err=>console.log(err))
        


    }
    nextWeek() {
        this.setState({ d0: moment(this.state.d0, "YYYY-MM-DDTHH:mm").add(6, 'days') })
        this.setState({ d1: moment(this.state.d1, "YYYY-MM-DDTHH:mm").add(6, 'days') })
        this.setState({ d2: moment(this.state.d2, "YYYY-MM-DDTHH:mm").add(6, 'days') })
        this.setState({ d3: moment(this.state.d3, "YYYY-MM-DDTHH:mm").add(6, 'days') })
        this.setState({ d4: moment(this.state.d4, "YYYY-MM-DDTHH:mm").add(6, 'days') })
        this.setState({ d5: moment(this.state.d5, "YYYY-MM-DDTHH:mm").add(6, 'days') })
    }

    prevWeek() {
        this.setState({ d0: moment(this.state.d0, "YYYY-MM-DDTHH:mm").subtract(6, 'days') })
        this.setState({ d1: moment(this.state.d1, "YYYY-MM-DDTHH:mm").subtract(6, 'days') })
        this.setState({ d2: moment(this.state.d2, "YYYY-MM-DDTHH:mm").subtract(6, 'days') })
        this.setState({ d3: moment(this.state.d3, "YYYY-MM-DDTHH:mm").subtract(6, 'days') })
        this.setState({ d4: moment(this.state.d4, "YYYY-MM-DDTHH:mm").subtract(6, 'days') })
        this.setState({ d5: moment(this.state.d5, "YYYY-MM-DDTHH:mm").subtract(6, 'days') })
    }
  
    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.counter < this.state.counter) {
            this.nextWeek()
        }
        if ((prevState.counter > this.state.counter)) {
            this.prevWeek()
        }

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
                                                <Button onClick={() => { if(this.state.counter>0) { this.setState({ counter: this.state.counter - 1 })}}}><NavigateBefore /> </Button>
                                            </Grid>
                                            <Grid item>
                                                <Typography> {moment(this.state.d0).format('dddd')} </Typography>
                                                <Typography> {moment(this.state.d0).format("MMM D")}</Typography>
                                                <Grid container direction='column'>
                                                    {
                                                        this.state.dispo.map(diss =>
                                                            (moment(diss.dateTime).isSame(this.state.d0, "day")) ?
                                                                (

                                                                    
                                                                        <Grid item>
                                                                            <Button onClick={() => this.handleRDV(diss.id)}>
                                                                                <Typography > {moment(diss.dateTime).format('HH:mm')}</Typography>
                                                                            </Button>

                                                                        </Grid>
                                                                    

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

                                                                        <Grid item>
                                                                            <Button onClick={() => this.handleRDV(diss.id)}>
                                                                                <Typography > {moment(diss.dateTime).format('HH:mm')}</Typography>
                                                                            </Button>

                                                                        </Grid>

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

                                                                        <Grid item>
                                                                            <Button onClick={() => this.handleRDV(diss.id)}>
                                                                                <Typography > {moment(diss.dateTime).format('HH:mm')}</Typography>
                                                                            </Button>

                                                                        </Grid>

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

                                                                        <Grid item>
                                                                            <Button onClick={() => this.handleRDV(diss.id)}>
                                                                                <Typography > {moment(diss.dateTime).format('HH:mm')}</Typography>
                                                                            </Button>

                                                                        </Grid>

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

                                                                        <Grid item>
                                                                            <Button onClick={() => this.handleRDV(diss.id)}>
                                                                                <Typography > {moment(diss.dateTime).format('HH:mm')}</Typography>
                                                                            </Button>

                                                                        </Grid>

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

                                                                        <Grid item>
                                                                            <Button onClick={() => this.handleRDV(diss.id)}>
                                                                                <Typography > {moment(diss.dateTime).format('HH:mm')}</Typography>
                                                                            </Button>

                                                                        </Grid>

                                                                ) : ('')

                                                        )}
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Button onClick={() => this.setState({ counter: this.state.counter + 1 })}><NavigateNext /> </Button>

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
export default withStyles(styles)(CalendarRDVModifier)
