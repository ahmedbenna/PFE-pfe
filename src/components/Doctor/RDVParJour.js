import React from 'react'
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';


import moment from 'moment'
import axios from 'axios'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import DisponibiliteDelete from './DisponibiliteDelete';
import RDVDelete from '../RDVDelete';
import { withStyles } from '@material-ui/core/styles';



const styles = {


    root: {
        padding:'10px',
        maxWidth: 345,
    },


};


class RDVParJour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctor: JSON.parse(localStorage.getItem('doctorInfo')),
            allRDV: [],
            dayRDV: [],
            currentDate: props.today,
            
        }

    }


    componentDidMount() {
        this.getAllRDV()
        if (this.state.allRDV != []) {
            this.getdayRDV()
        }


    }
    getAllRDV = () => {
        const url = 'http://localhost:8080/api/medecins/' + this.state.doctor.id + '/rendezvous'
        axios
            .get(url)
            .then(res => {
                console.log("getallRDV", res)
                const newarr = res.data.sort((a, b) => {
                    return moment(a.dateTime).diff(b.dateTime);
                });
                this.setState({ allRDV: newarr })



            })
            .catch(err => console.log("err get all dispo", err))
    }


    getdayRDV = () => {
        console.log('aaaaaaaaaa', this.state.allRDV)

        const day = this.state.allRDV.map(diss => {
            if (moment(diss.disponibilite.dateTime).isSame(moment(this.state.currentDate, 'YYYY-MM-DD'), "day")) {
                return (moment(diss.disponibilite.dateTime, 'YYYY-MM-DDTHH:mm').format('YYYY-MM-DDTHH:mm'))
             }
        }
        )

        console.log("dsdsdsd", day)

    }





    componentDidUpdate(prevProps, prevState) {
        if (this.props.today !== prevProps.today) {
            this.setState({ currentDate: this.props.today })
            let a = this.props.today
            this.state.allRDV.forEach(function (item) {
                if (moment(item.disponibilite.dateTime).isSame(moment(a, 'YYYY-MM-DD'), "day")) {
                     console.log("item", item)
                }
            })
            console.log('changed')
        }
    }








    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                {this.state.allRDV.map(diss =>


                    (moment(diss.disponibilite.dateTime).isSame(moment(this.state.currentDate, 'YYYY-MM-DD'), "day")) ?
                        (
                            <div className={classes.root}>
                            <Card >

                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        RDV a : {moment(diss.disponibilite.dateTime, 'YYYY-MM-DDTHH:mm').format('HH:mm')}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Patient : {diss.patient.nom} {diss.patient.prenom}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        telephone : {diss.patient.telephone} 
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <RDVDelete id={diss.id} />
                                </CardActions>
                            </Card>
                            </div>


                        ) : ('')

                )
                }

            </div>
        )
    }
}
export default withStyles(styles)(RDVParJour)