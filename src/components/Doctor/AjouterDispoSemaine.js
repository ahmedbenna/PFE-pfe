
import React from 'react'

import { withStyles } from '@material-ui/core/styles';

import { Dialog, DialogTitle, DialogActions, DialogContent, TextField, Button, Typography, Grid, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

import axios from 'axios'
import DateFnsUtils from '@date-io/date-fns';
import { Add } from '@material-ui/icons';


import moment from 'moment'

const styles = {
    form: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {

        width: 200,
    },
}

class AjouterDispoSemaine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            duree: '',
            lunD: '',
            lunF: '',
            marD: '',
            marF: '',
            merD: '',
            merF: '',
            jeuD: '',
            jeuF: '',
            venD: '',
            venF: '',
            samD: '',
            samF: '',
            dimD: '',
            dimF: '',
            allDispo: [],
            repeat: 0,

            id: JSON.parse(localStorage.getItem('doctorInfo')).id,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        let list = []







        let dt = this.state.date
        while ((moment(dt).day()) != 1) {
            dt = moment(dt).add(1, 'days')
            console.log('ajou', moment(dt).calendar())
        }

            let dis = moment(dt, 'YYYY-MM-DD').format('YYYY-MM-DD')
            let dis2 = moment(dt, 'YYYY-MM-DD').format('YYYY-MM-DD')
            console.log("disss", dis)

            let m = moment(this.state.lunD, 'HH:mm').minutes()
            let m2 = moment(this.state.lunF, 'HH:mm').minutes()
            let h = moment(this.state.lunD, 'HH:mm').hour()
            let h2 = moment(this.state.lunF, 'HH:mm').hour()


        


        for ( let i = 0; i <= this.state.repeat; i++) {
            
             dis = moment(dt, 'YYYY-MM-DD').format('YYYY-MM-DD')
             dis2 = moment(dt, 'YYYY-MM-DD').format('YYYY-MM-DD')
            console.log("disss", dis)

             m = moment(this.state.lunD, 'HH:mm').minutes()
             m2 = moment(this.state.lunF, 'HH:mm').minutes()
             h = moment(this.state.lunD, 'HH:mm').hour()
             h2 = moment(this.state.lunF, 'HH:mm').hour()

            dis = moment(dis).add(m, 'minutes');
            dis = moment(dis).add(h, 'hour')

            dis2 = moment(dis2).add(m2, 'minutes');
            dis2 = moment(dis2).add(h2, 'hour')


            while (moment(dis).isBefore(dis2)) {


                list.push({ dateTime: moment(dis).format('yyyy-MM-DDTHH:mm') })

                dis = moment(dis).add(this.state.duree, 'minutes')
            }

            dt = moment(dt, 'YYYY-MM-DD').add(1, 'days')
            dis = moment(dt, 'YYYY-MM-DD').format('YYYY-MM-DD')
            dis2 = moment(dt, 'YYYY-MM-DD').format('YYYY-MM-DD')
            console.log("disss", dis)

            m = moment(this.state.marD, 'HH:mm').minutes()
            m2 = moment(this.state.marF, 'HH:mm').minutes()
            h = moment(this.state.marD, 'HH:mm').hour()
            h2 = moment(this.state.marF, 'HH:mm').hour()

            dis = moment(dis).add(m, 'minutes');
            dis = moment(dis).add(h, 'hour')

            dis2 = moment(dis2).add(m2, 'minutes');
            dis2 = moment(dis2).add(h2, 'hour')


            while (moment(dis).isBefore(dis2)) {


                list.push({ dateTime: moment(dis).format('yyyy-MM-DDTHH:mm') })

                dis = moment(dis).add(this.state.duree, 'minutes')
            }
            dt = moment(dt, 'YYYY-MM-DD').add(1, 'days')
            dis = moment(dt, 'YYYY-MM-DD').format('YYYY-MM-DD')
            dis2 = moment(dt, 'YYYY-MM-DD').format('YYYY-MM-DD')
            console.log("disss", dis)

            m = moment(this.state.merD, 'HH:mm').minutes()
            m2 = moment(this.state.merF, 'HH:mm').minutes()
            h = moment(this.state.merD, 'HH:mm').hour()
            h2 = moment(this.state.merF, 'HH:mm').hour()

            dis = moment(dis).add(m, 'minutes');
            dis = moment(dis).add(h, 'hour')

            dis2 = moment(dis2).add(m2, 'minutes');
            dis2 = moment(dis2).add(h2, 'hour')


            while (moment(dis).isBefore(dis2)) {


                list.push({ dateTime: moment(dis).format('yyyy-MM-DDTHH:mm') })

                dis = moment(dis).add(this.state.duree, 'minutes')
            }
            dt = moment(dt, 'YYYY-MM-DD').add(1, 'days')
            dis = moment(dt, 'YYYY-MM-DD').format('YYYY-MM-DD')
            dis2 = moment(dt, 'YYYY-MM-DD').format('YYYY-MM-DD')
            console.log("disss", dis)

            m = moment(this.state.jeuD, 'HH:mm').minutes()
            m2 = moment(this.state.jeuF, 'HH:mm').minutes()
            h = moment(this.state.jeuD, 'HH:mm').hour()
            h2 = moment(this.state.jeuF, 'HH:mm').hour()

            dis = moment(dis).add(m, 'minutes');
            dis = moment(dis).add(h, 'hour')

            dis2 = moment(dis2).add(m2, 'minutes');
            dis2 = moment(dis2).add(h2, 'hour')


            while (moment(dis).isBefore(dis2)) {


                list.push({ dateTime: moment(dis).format('yyyy-MM-DDTHH:mm') })

                dis = moment(dis).add(this.state.duree, 'minutes')
            }
            dt = moment(dt, 'YYYY-MM-DD').add(1, 'days')
            dis = moment(dt, 'YYYY-MM-DD').format('YYYY-MM-DD')
            dis2 = moment(dt, 'YYYY-MM-DD').format('YYYY-MM-DD')
            console.log("disss", dis)

            m = moment(this.state.venD, 'HH:mm').minutes()
            m2 = moment(this.state.venF, 'HH:mm').minutes()
            h = moment(this.state.venD, 'HH:mm').hour()
            h2 = moment(this.state.venF, 'HH:mm').hour()

            dis = moment(dis).add(m, 'minutes');
            dis = moment(dis).add(h, 'hour')

            dis2 = moment(dis2).add(m2, 'minutes');
            dis2 = moment(dis2).add(h2, 'hour')


            while (moment(dis).isBefore(dis2)) {


                list.push({ dateTime: moment(dis).format('yyyy-MM-DDTHH:mm') })

                dis = moment(dis).add(this.state.duree, 'minutes')
            }
            dt = moment(dt, 'YYYY-MM-DD').add(1, 'days')
            dis = moment(dt, 'YYYY-MM-DD').format('YYYY-MM-DD')
            dis2 = moment(dt, 'YYYY-MM-DD').format('YYYY-MM-DD')
            console.log("disss", dis)

            m = moment(this.state.samD, 'HH:mm').minutes()
            m2 = moment(this.state.samF, 'HH:mm').minutes()
            h = moment(this.state.samD, 'HH:mm').hour()
            h2 = moment(this.state.samF, 'HH:mm').hour()

            dis = moment(dis).add(m, 'minutes');
            dis = moment(dis).add(h, 'hour')

            dis2 = moment(dis2).add(m2, 'minutes');
            dis2 = moment(dis2).add(h2, 'hour')


            while (moment(dis).isBefore(dis2)) {


                list.push({ dateTime: moment(dis).format('yyyy-MM-DDTHH:mm') })

                dis = moment(dis).add(this.state.duree, 'minutes')
            }
            dt = moment(dt, 'YYYY-MM-DD').add(1, 'days')
            dis = moment(dt, 'YYYY-MM-DD').format('YYYY-MM-DD')
            dis2 = moment(dt, 'YYYY-MM-DD').format('YYYY-MM-DD')
            console.log("disss", dis)

            m = moment(this.state.dimD, 'HH:mm').minutes()
            m2 = moment(this.state.dimF, 'HH:mm').minutes()
            h = moment(this.state.dimD, 'HH:mm').hour()
            h2 = moment(this.state.dimF, 'HH:mm').hour()

            dis = moment(dis).add(m, 'minutes');
            dis = moment(dis).add(h, 'hour')

            dis2 = moment(dis2).add(m2, 'minutes');
            dis2 = moment(dis2).add(h2, 'hour')


            while (moment(dis).isBefore(dis2)) {


                list.push({ dateTime: moment(dis).format('yyyy-MM-DDTHH:mm') })

                dis = moment(dis).add(this.state.duree, 'minutes')
            }
            dt = moment(dt, 'YYYY-MM-DD').add(1, 'days')

            
        }


        console.log(list)

        const url = 'http://localhost:8080/api/medecins/' + this.state.id + '/disponibilites'
        axios.post(url, list)
            .then(res => {
                console.log(res)
                window.location.reload(false)
            })
            .catch(res => {
                console.log(res)
            })

        // window.location.reload(false)
    }
    render() {
        const { classes } = this.props;
        console.log(this.state)

        const handleClickOpen = () => {
            this.setState({ open: true });
        };

        const handleClose = () => {
            this.setState({ open: false });
        };
        return (
            <div>
                <Button variant="text" color="primary" onClick={handleClickOpen}>
                    <Add />
                </Button>
                <Dialog open={this.state.open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Ajouter disponibilites</DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.handleSubmit} style={{ padding: '20px' }}>
                            <Grid direction='row' justify='center' alignContent='center' spacing={2} container>
                                <Grid item>
                                    <TextField
                                        label='Repetition du semaine'
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        type='number'
                                        name='repeat'

                                    />
                                </Grid>

                                <Grid item>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-label">Duree de consultation</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            style={{ width: "200px" }}
                                            id="demo-simple-select"
                                            name="duree"
                                            value={this.state.duree}
                                            onChange={this.handleChange}
                                        >
                                            <MenuItem value={15}>15 min</MenuItem>
                                            <MenuItem value={30}>30 min</MenuItem>
                                            <MenuItem value={45}>45 min</MenuItem>
                                            <MenuItem value={60}>1 Heure</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid direction='row' justify='center' alignContent='center' spacing={2} container>
                                <Grid item xs={12}>
                                    <Typography variant='h5'> lundi</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography> debut</Typography>
                                    <TextField
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        type='time'
                                        name='lunD'

                                    />
                                </Grid>
                                <Grid item>
                                    <Typography> fin</Typography>
                                    <TextField
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        type='time'
                                        name='lunF'

                                    />

                                </Grid>
                            </Grid>
                            <Grid direction='row' justify='center' alignContent='center' spacing={2} container>
                                <Grid item xs={12}>
                                    <Typography variant='h5'> Mardi</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography> debut</Typography>
                                    <TextField
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        type='time'
                                        name='marD'

                                    />
                                </Grid>
                                <Grid item>
                                    <Typography> fin</Typography>
                                    <TextField
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        type='time'
                                        name='marF'

                                    />

                                </Grid>
                            </Grid>
                            <Grid direction='row' justify='center' alignContent='center' spacing={2} container>
                                <Grid xs={12} item>
                                    <Typography variant='h5'> Mercredi</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography> debut</Typography>
                                    <TextField
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        type='time'
                                        name='merD'

                                    />
                                </Grid>
                                <Grid item>
                                    <Typography> fin</Typography>
                                    <TextField
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        type='time'
                                        name='merF'

                                    />

                                </Grid>
                            </Grid>
                            <Grid direction='row' justify='center' alignContent='center' spacing={2} container>
                                <Grid xs={12} item>
                                    <Typography variant='h5'> Jeudi</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography> debut</Typography>
                                    <TextField
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        type='time'
                                        name='jeuD'

                                    />
                                </Grid>
                                <Grid item>
                                    <Typography> fin</Typography>
                                    <TextField
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        type='time'
                                        name='jeuF'

                                    />

                                </Grid>
                            </Grid>
                            <Grid direction='row' justify='center' alignContent='center' spacing={2} container>
                                <Grid xs={12} item>
                                    <Typography variant='h5'> Vendredi</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography> debut</Typography>
                                    <TextField
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        type='time'
                                        name='venD'

                                    />
                                </Grid>
                                <Grid item>
                                    <Typography> fin</Typography>
                                    <TextField
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        type='time'
                                        name='venF'

                                    />

                                </Grid>
                            </Grid>
                            <Grid direction='row' justify='center' alignContent='center' spacing={2} container>
                                <Grid xs={12} item>
                                    <Typography variant='h5'> Samedi</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography> debut</Typography>
                                    <TextField
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        type='time'
                                        name='samD'

                                    />
                                </Grid>
                                <Grid item>
                                    <Typography> fin</Typography>
                                    <TextField
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        type='time'
                                        name='samF'

                                    />

                                </Grid>
                            </Grid>
                            <Grid direction='row' justify='center' alignContent='center' spacing={2} container>
                                <Grid xs={12} item>
                                    <Typography variant='h5'> Dimanche</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography> debut</Typography>
                                    <TextField
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        type='time'
                                        name='dimD'

                                    />
                                </Grid>
                                <Grid item>
                                    <Typography> fin</Typography>
                                    <TextField
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        type='time'
                                        name='dimF'

                                    />

                                </Grid>
                            </Grid>




                        </form>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.handleSubmit} color="primary">
                            Confermer
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Annuler
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
export default withStyles(styles)(AjouterDispoSemaine)
