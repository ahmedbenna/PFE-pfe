import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';








export default class RdvParJour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate : props.today,
            tousRDV: props.tousRDV,
            schedulerData : [
                { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
                { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
            ],
        }

    }

    setDate(){
        const data=[]
        this.state.tousRDV.map(rdv=>
            
            data.push()
        )
       
    }
    
    render() {
        return (
            <Paper>
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