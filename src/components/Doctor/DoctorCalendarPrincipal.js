import moment from 'moment'
import React, { Component } from 'react'
import Calendar from 'react-calendar'
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import DispoParJour from './DispoParJour';
import RDVParJour from './RDVParJour';
import { Button, Grid, Typography } from '@material-ui/core';




const styles = {

  rdv: {
    color: "#FFFFFF",
    backgroundColor: '#C75D7D',
    borderRadius: ' 25px',
  },
  dispo: {
    color: "#FFFFFF",
    backgroundColor: "#00e676",
    borderRadius: ' 25px',
  }

};

class DoctorCalendarPrincipal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      today: new Date(),
      dispo: [],
      RDV: [],


    }
  }

  getRDV() {
    const doc = JSON.parse(localStorage.getItem("doctorInfo"))
    const url = 'http://localhost:8080/api/medecins/' + doc.id + '/rendezvous'
    axios
      .get(url)
      .then(res => {
        console.log(res)
        this.setState({ RDV: res.data })
      })
      .catch(err => { console.log(err) })


  }

  getDispo() {
    const doc = JSON.parse(localStorage.getItem("doctorInfo"))
    const url = 'http://localhost:8080/api/medecins/' + doc.id + '/disponibilitesAll'
    axios
      .get(url)
      .then(res => {
        console.log(res)
        this.setState({ dispo: res.data })
      })
      .catch(err => { console.log(err) })


  }
  componentDidMount() {
    this.getDispo()
    this.getRDV()
  }
  render() {
    console.log(this.state)
    const { classes } = this.props;

    return (
      <div>
        <div style={{ float: 'right'}}>
          <Grid container  >
            <Grid item>
              <Typography variant='p' className={classes.dispo} style={{ padding: '10px' }} > Disponible </Typography>
            </Grid>
            <Grid item>
              <Typography variant='p' className={classes.rdv} style={{ padding: '10px' }}> Rendez-vous </Typography>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container>
            <Grid item >
              <Calendar
                locale="fr-fr"
                onChange={(a, event) => { this.setState({ today: a }) }}
                value={this.state.today}
                tileClassName={({ date }) => {
                  const isDispo = this.state.dispo.some((data, index) => {
                    let datedata = new Date(data.dateTime);
                    let dateOne = moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD');
                    let datetwo = moment(data.dateTime, 'YYYY-MM-DD').format('YYYY-MM-DD');
                    return dateOne === datetwo;
                  });
                  const isRDV = this.state.RDV.some((data, index) => {
                    let datedata = new Date(data.disponibilite.dateTime);
                    let dateOne = moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD');
                    let datetwo = moment(data.disponibilite.dateTime, 'YYYY-MM-DD').format('YYYY-MM-DD');
                    return dateOne === datetwo;
                  });
                  if ((isRDV) && (isDispo)) {
                    return classes.rdv;
                  } else if (isDispo) {
                    return classes.dispo;
                  } else {
                    return null;
                  }
                }



                }
              />
            </Grid>
            <Grid item >
              <RDVParJour today={this.state.today} />
            </Grid>
            <Grid item >
              <DispoParJour today={this.state.today} />
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(DoctorCalendarPrincipal)