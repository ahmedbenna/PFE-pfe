import * as React from 'react';



import moment from 'moment'
import axios from 'axios'
import { Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import DisponibiliteDelete from './DisponibiliteDelete';
import { withStyles } from '@material-ui/core/styles';








const styles = {


    root: {
        padding:'10px',
        maxWidth: 345,
    },


};

class DispoParJour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctor: JSON.parse(localStorage.getItem('doctorInfo')),
            allDispo: [],
            dayDispo: [],
            currentDate: props.today,
           
            
        }

    }


    componentDidMount() {
        this.getAllDispo()
        if (this.state.allDispo != []) {
            this.getDayDispo()
        }


    }
    getAllDispo = () => {
        const url = 'http://localhost:8080/api/medecins/' + this.state.doctor.id + '/disponibilitesVide'
        axios
            .get(url)
            .then(res => {
                console.log("getalldispo", res)
                const newarr = res.data.sort((a, b) => {
                    return moment(a.dateTime).diff(b.dateTime);
                  });
                this.setState({ allDispo: newarr })
               


            })
            .catch(err => console.log("err get all dispo", err))
    }


    getDayDispo = () => {
        console.log('aaaaaaaaaa', this.state.allDispo)

        const day = this.state.allDispo.map(diss => {
            if (moment(diss.dateTime).isSame(moment(this.state.currentDate, 'YYYY-MM-DD'), "day")) {
                return (moment(diss.dateTime, 'YYYY-MM-DDTHH:mm').format('YYYY-MM-DDTHH:mm'))
                 }
        }
        )

        console.log("dsdsdsd", day)

    }
    
   
    


    componentDidUpdate(prevProps, prevState) {
        if (this.props.today !== prevProps.today) {
            this.setState({ currentDate: this.props.today })
            let a=this.props.today
                this.state.allDispo.forEach(function (item){
                    if(moment(item.dateTime).isSame(moment(a, 'YYYY-MM-DD'), "day")) 
                    {
                         console.log("item", item)
                    }
                })
            console.log('changed')
        }
    }








    render() {
        const { classes } = this.props;

        
        return (
            <div>
                {this.state.allDispo.map(diss =>


                    (moment(diss.dateTime).isSame(moment(this.state.currentDate, 'YYYY-MM-DD'), "day")) ?
                        (
                            <div className={classes.root}>
                            <Card >
                                <CardContent>
                                    <Grid container>
                                        <Grid item>
                                        <Typography variant="h6" >
                                            disponible a : {moment(diss.dateTime, 'YYYY-MM-DDTHH:mm').format('HH:mm')}  
                                        </Typography>
                                        </Grid>
                                        <Grid item>
                                            <DisponibiliteDelete id={diss.id}/>
                                        </Grid> 
                                    </Grid>
                                   
                                </CardContent>
                                
                            </Card>
                            </div>
                          

                        ) : ('')

                )
                }
               
            </div>
        )
    }
}
export default withStyles(styles)(DispoParJour)