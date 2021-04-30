import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import { Typography } from '@material-ui/core';
import RdvParJour from './RdvParJour';
import axios from 'axios'
import { addDays, isSameDay } from 'date-fns';

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

const now = new Date();
const tomorrow = addDays(now, 1);
const in3Days = addDays(now, 3);
const in5Days = addDays(now, 5);
console.log("aaaa", now);

const disabledDates = [tomorrow, in3Days, in5Days, addDays(now, 0)];
export default class AfficherCalendre extends React.Component {
  constructor() {
    super();
    this.state = {
      today: new Date(),
      date: new Date(),
      tousRDV:[],
      dispo:[],
      
    };
    this.checkdates = disabledDates;

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
          .then(res=>{this.setState({dispo:res.data})})
          .catch(err=>{console.log(err)})

          console.log(this.state)
  }
  componentDidMount() {
    this.getDispo()
  }
  

render(){
  console.log(this.state)
  return (
    <div>
      <Calendar
        onChange={(a,event)=>{this.setState({today:a})}}
        value={this.state.today}
        // tileClassName={({ date }) => {
        //   const isOnList = moment(this.state.dispo.dateTime,'yyyy-mm-DDThh:mm').some((data, index) => {
        //     let datedata = new Date(data);
        //     let dateOne = moment(date).format("L");
        //     let datetwo = moment(datedata).format("L");
        //     console.log('aaaaaaaa',datetwo)
        //     return dateOne === datetwo;
        //   });

        //   if (isOnList) {
        //     return "testdata";
        //   } else {
        //     return null;
        //   }
        // }}
      />
      {console.log(moment(this.state.today).format("MM-DD-yyyy"))}
    
      <RdvParJour
        today={this.state.today}
        // tousRDV={tousRDV}
      />
    </div>
  );
}}