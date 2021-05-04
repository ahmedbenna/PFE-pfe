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
    color:"#AFF231"
  }

};
// function getRDV() {
//   const url = ''
//   axios
//     .get(url)
//     .then(res => { const tousRDV = res.data })
//     .catch(err => { console.log(err) })
// }


// const dat= new Date()
// const datesToAddContentTo = [dat.setDate(dat.getDate() + 1), dat.setDate(dat.getDate() + 2), dat.setDate(dat.getDate() + 3)];


// function tileContent({ date, view }) {
//   // Add class to tiles in month view only
//   if (view === 'month') {
//     // Check if a date React-Calendar wants to check is on the list of dates to add class to
//     if (datesToAddContentTo.find(dDate =>moment(dDate).isSame(date) )) {
//       return 'My content';
//     }
//   }
// }

// const now = new Date();
// const tomorrow = addDays(now, 1);
// const in3Days = addDays(now, 3);
// const in5Days = addDays(now, 5);
// // console.log("aaaa", now);

// const disabledDates = [tomorrow, in3Days, in5Days, addDays(now, 0)];


 class AfficherCalendre extends React.Component {
  constructor() {
    super();
    this.state = {
      today: new Date(),
      date: new Date(),
      tousRDV:[],
      dispo:[],
      
    };
    // this.checkdates = disabledDates;

  }
  
  
  // tileClassName({date, view}){
  //   if (view === 'month') {
  //     return this.state.dispo.find(dDate => isSameDay(dDate.dateTime, date));
  //   }
  // }
  getDispo () {
    const doc= JSON.parse(localStorage.getItem("doctorInfo"))
    const url='http://localhost:8080/api/medecins/'+doc.id+'/disponibilitesAll'
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
        // {this.state.dispo.map(diss=>{
          
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
                        
                          // view === 'month' && (moment(date,'YYYY-MM-DD').isSame(moment('2021-05-09'))) ? 
                          // classes.day : null
                          
                      }
    
      />    
      <DispoParJour
        today={this.state.today}
        // tousRDV={tousRDV}
      />
    </div>
  );
}}
export default withStyles (styles)(AfficherCalendre)