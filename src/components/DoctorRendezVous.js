import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React from 'react'

import moment from 'moment'
import Calendar from 'react-calendar'

import { withRouter } from 'react-router-dom'
import RDVParJour from './RDVParJour';

const styles = {

    link: {
        textDecoration: 'none',
        color: 'rgb(0 35 75)'
    },
    day:{
      color:"#FFFFFF",
      backgroundColor:"#0091ea",
      borderRadius:' 25px',
  
    },
  
  };
class DoctorRendezVous extends React.Component {
    constructor() {
        super();
        this.state = {
          today: new Date(),
          date: new Date(),
          rdv:[],
          dispo:[],
          
        };
    
    
      }
      getRDV () {
        const doc= JSON.parse(localStorage.getItem("doctorInfo"))
        const url='http://localhost:8080/api/medecins/'+doc.id+'/rendezvous'
        axios
              .get(url)
              .then(res=>{ console.log(res)
                this.setState({rdv:res.data})})
              .catch(err=>{console.log(err)})
    
              
      }
      componentDidMount() {
        this.getRDV()
      }
    render(){
    const { classes } = this.props;

    return (
        <div>
            <Grid container spacing={2} direction="column" alignItems="center" justify="center">
                <Grid item xs={12}>
                    <Typography variant='h6'>
                        Mes RDVs
                    </Typography>
                </Grid>

                <Grid item>
                    <Calendar
                        locale="fr-fr"
                        onChange={(a, event) => { this.setState({ today: a }) }}
                        value={this.state.today}
                        // {this.state.dispo.map(diss=>{

                        tileClassName={({ activeStartDate, date, view }) => {
                            const isOnList = this.state.rdv.some((data, index) => {
                                let datedata = new Date(data.disponibilite.dateTime);
                                let dateOne = moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD');
                                let datetwo = moment(data.disponibilite.dateTime, 'YYYY-MM-DD').format('YYYY-MM-DD');
                                return dateOne === datetwo;
                            });

                            if (isOnList) {
                                return classes.day;
                            } else {
                                return null;
                            }
                        }

                            // view === 'month' && (moment(date,'YYYY-MM-DD').isSame(moment('2021-05-09'))) ? 
                            // classes.day : null

                        }

                    />
                </Grid>
                <RDVParJour today={this.state.today}/>

            </Grid>
        </div>
    )
}
}
export default withRouter (withStyles (styles)(DoctorRendezVous))