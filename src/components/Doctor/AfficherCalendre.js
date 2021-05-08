import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import RdvParJour from './DispoParJour';
import axios from 'axios'
import { addDays, isSameDay } from 'date-fns';
import DispoParJour from './DispoParJour';

const styles = {

  link: {
      textDecoration: 'none',
      color: 'rgb(0 35 75)'
  },
  day:{
    color:"#FFFFFF",
    backgroundColor:"#00e676",
    borderRadius:' 25px',

  }

};

 class AfficherCalendre extends React.Component {
  constructor() {
    super();
    this.state = {
      today: new Date(),
      date: new Date(),
      tousRDV:[],
      dispo:[],
      
    };

  }
  
  getDispo () {
    const doc= JSON.parse(localStorage.getItem("doctorInfo"))
    const url='http://localhost:8080/api/medecins/'+doc.id+'/disponibilitesVide'
    axios
          .get(url)
          .then(res=>{ console.log(res)
            this.setState({dispo:res.data})})
          .catch(err=>{console.log(err)})

          
  }
  componentDidMount() {
    this.getDispo()
  }
  

render(){
  console.log("dispo",this.state.dispo)
  const { classes } = this.props;
  return (
    <div>
      <Calendar
        locale="fr-fr"
        onChange={(a,event)=>{this.setState({today:a})}}
        value={this.state.today}
          
                      tileClassName={({ activeStartDate, date, view }) =>
                      {
                        const isOnList = this.state.dispo.some((data, index) => {
                          let datedata = new Date(data.dateTime);
                          let dateOne = moment(date,'YYYY-MM-DD').format('YYYY-MM-DD');
                          let datetwo = moment(data.dateTime,'YYYY-MM-DD').format('YYYY-MM-DD');
                          return dateOne === datetwo;
                        });
            
                        if (isOnList) {
                          return classes.day;
                        } else {
                          return null;
                        }
                      }
                        
                         
                      }
    
      />    
      <DispoParJour
        today={this.state.today}
      />
    </div>
  );
}}
export default withStyles (styles)(AfficherCalendre)