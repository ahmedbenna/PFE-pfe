import React, { Component } from 'react'

import { Container, CssBaseline, Grid, Typography } from '@material-ui/core/';

import { withStyles } from '@material-ui/core/styles';

import axios from 'axios'

import moment from 'moment'
import 'moment/locale/fr'


const styles = {
    container: {

    }
};

class Calendar extends Component {
    
    constructor(props) {
        const dateDebut ='2021-05-06T10:01'
        const dateFin =  '2021_05-06T10:59'
        const url='http://localhost:8080/api/medecins/1/disponibilites?dateDebut=2021-05-06T10:01&dateFin=202105-06-T10:59'
        
        axios.get(url)
        .then(res =>{console.log("dispo",res)
                    localStorage.setItem("dispo",JSON.stringify(res.data)) })
              
        .catch(err => { console.log(err)})
        super(props);
        const disponibilites=JSON.parse(localStorage.getItem("dispo"))
        // console.log("dissss",disponibilites.dateTime)
       
        this.state = {
         
            dispo: disponibilites,
            d0: new Date (),
            
            d1: new Date(),
            d2: new Date(),
            d3: new Date(),
            d4: new Date(),
            d5: new Date(),


        };
       

    }

    render() {
        const { classes } = this.props;
        moment.locale('fr')
        this.state.d1.setDate(this.state.d1.getDate() +1)
        this.state.d2.setDate(this.state.d2.getDate() +2)
        this.state.d3.setDate(this.state.d3.getDate() +3)
        this.state.d4.setDate(this.state.d4.getDate() +4)
        this.state.d5.setDate(this.state.d5.getDate() +5)

        return (
            <div>
                <CssBaseline>
                    <Container className={classes.container}>
                        <div>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Grid spacing={1} container>
                                        <Grid item>
                                            <Typography> {moment(this.state.d0).format('dddd')} </Typography>
                                            <Typography> {moment(this.state.d0).format("MMM D")}</Typography>
                                            {/* {this.state.dispo.map(diss =>

                                                <Typography> {moment(diss.dateTime).format('hh:mm')}</Typography>
                                               
                                            )} */}
                                        </Grid>
                                        <Grid item>
                                            <Typography> {moment(this.state.d1).format('dddd')} </Typography>
                                            <Typography> {moment(this.state.d1).format("MMM D")}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography> {moment(this.state.d2).format('dddd')} </Typography>
                                            <Typography> {moment(this.state.d2).format("MMM D")}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography> {moment(this.state.d3).format('dddd')} </Typography>
                                            <Typography> {moment(this.state.d3).format("MMM D")}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography> {moment(this.state.d4).format('dddd')} </Typography>
                                            <Typography> {moment(this.state.d4).format("MMM D")}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography> {moment(this.state.d5).format('dddd')} </Typography>
                                            <Typography> {moment(this.state.d5).format("MMM D")}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                
                                {/* // <Grid item>
                                    
                                //     <Grid spacing={1} container>
                                //         {this.state.dispo.map(dis =>
                                            
                                //             <Grid item>
                                                
                                                
                                //                 {moment(dis.dateTime).format('hh:mm')}
                                //             </Grid>
                                    
                                //         )}
                                //     </Grid>
                                // </Grid> */}
                            </Grid>
                        </div>
                    </Container>
                </CssBaseline>
            </div>
        )
    }
}
export default withStyles(styles)(Calendar)
