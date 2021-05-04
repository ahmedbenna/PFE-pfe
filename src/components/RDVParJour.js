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
import { Grid, Typography } from '@material-ui/core';
import DisponibiliteDelete from './DisponibiliteDelete';
import RDVDelete from './RDVDelete';








export default class RDVParJour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctor: JSON.parse(localStorage.getItem('doctorInfo')),
            allRDV: [],
            dayRDV: [],
            currentDate: props.today,
            // tousRDV: props.tousRDV,
            // schedulerData: [
            //     { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
            //     { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
            // ],
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
                // console.log("dissss",diss),
                // <Typography> disponible  : {moment(diss.dateTime,'YYYY-MM-DDTHH:mm').calendar()}</Typography>
            }
        }
        )

        console.log("dsdsdsd", day)

    }
    
   
    


    componentDidUpdate(prevProps, prevState) {
        if (this.props.today !== prevProps.today) {
            this.setState({ currentDate: this.props.today })
            let a=this.props.today
                this.state.allRDV.forEach(function (item){
                    if(moment(item.disponibilite.dateTime).isSame(moment(a, 'YYYY-MM-DD'), "day")) 
                    {
                        // t.push()
                        // this.setState({ dayRDV: [...this.state.dayRDV, { startDate: moment(item.dateTime, 'YYYY-MM-DDTHH:mm').format('YYYY-MM-DDTHH:mm'), title: 'Disponible' }] })
                        console.log("item", item)
                    }
                })
            console.log('changed')
        }
    }








    render() {
        // 
        // console.log(this.props.today)
        return (
            <Paper>
                {this.state.allRDV.map(diss =>


                    (moment(diss.disponibilite.dateTime).isSame(moment(this.state.currentDate, 'YYYY-MM-DD'), "day")) ?
                        (
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Typography> RDV a : {moment(diss.disponibilite.dateTime, 'YYYY-MM-DDTHH:mm').format('HH:mm')}  </Typography>    
                                </Grid>
                                <Grid item>
                                    <Typography> Patient : {diss.patient.nom} {diss.patient.prenom} </Typography>    
                                </Grid>
                                <Grid item>
                                    <RDVDelete id={diss.id}/>
                                </Grid>
                            </Grid>

                        ) : ('')

                )
                }
                {/* <Scheduler
                // data={this.state.dayRDV}
                >
                    <ViewState
                        currentDate={this.state.currentDate}
                    />
                    <DayView
                        startDayHour={9}
                        endDayHour={14}
                    />
                    <Appointments />
                </Scheduler> */}
            </Paper>
        )
    }
}