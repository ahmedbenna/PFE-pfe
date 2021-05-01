import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';


import moment from 'moment'
import axios from 'axios'
import { Typography } from '@material-ui/core';








export default class RdvParJour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctor : JSON.parse(localStorage.getItem('doctorInfo')),
            allDispo:[],
            dayDispo:[],
            currentDate : props.today,
            // tousRDV: props.tousRDV,
            schedulerData : [
                { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
                { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
            ],
        }

    }

   
    componentDidMount() {
        this.getAllDispo()
        if(this.state.allDispo != []){
            this.getDayDispo()
        }
        
       
    }
    getAllDispo=()=>{
        const url='http://localhost:8080/api/medecins/'+this.state.doctor.id+'/disponibilitesAll'
        axios
                .get(url)
                .then(res=>{ console.log("getalldispo",res) 
                            this.setState({allDispo:res.data})
                            // const day= this.state.allDispo.map((diss) =>
                            //     {
                            //          if (moment(diss.dateTime).isSame(moment(this.state.currentDate,'YYYY-MM-DD'), "day")) {
                            //      return (diss.dateTime)
                     
                            //     } }
                            //  )
                            //  console.log("dsdsdsd",day)
                        
                        
                        })
                .catch(err=>console.log("err get all dispo",err))
    }


    getDayDispo=()=>{
        console.log('aaaaaaaaaa',this.state.allDispo)
        // const day= this.state.allDispo.map(diss =>
        //    {
        //         if (moment(diss.dateTime).isSame(this.state.currentDate, "day")) {
        //     return (diss.dateTime)

        //    } }
        // )
        const day=this.state.allDispo.map(diss =>
               
                   
          {  if (moment(diss.dateTime).isSame(moment(this.state.currentDate,'YYYY-MM-DD'), "day")) {
                return (moment(diss.dateTime,'YYYY-MM-DDTHH:mm').format('YYYY-MM-DDTHH:mm'))
                    // console.log("dissss",diss),
                    // <Typography> disponible  : {moment(diss.dateTime,'YYYY-MM-DDTHH:mm').calendar()}</Typography>
                }
           }
        )
        
        console.log("dsdsdsd",day)
               
    }
    

    componentDidUpdate(prevProps, prevState) {
        if (this.props.today !== prevProps.today) {
            this.setState({currentDate:this.props.today})
        }
        
        
    }
    
       
    
    
    
    render() {
        // 
        // console.log(this.props.today)
        return (
            <Paper>
                { this.state.allDispo.map(diss =>
               
                   
                    (moment(diss.dateTime).isSame(moment(this.state.currentDate,'YYYY-MM-DD'), "day")) ?
                        (
                            console.log("dissss",diss),
                            <Typography> disponible  : {moment(diss.dateTime,'YYYY-MM-DDTHH:mm').calendar()}</Typography>
                        ):('')
                   
                )
                }
                <Scheduler
                    data={this.state.schedulerData}
                >
                    <ViewState
                        currentDate={this.state.currentDate}
                    />
                    <DayView
                        startDayHour={9}
                        endDayHour={14}
                    />
                    <Appointments />
                </Scheduler>
            </Paper>
        )
    }
}