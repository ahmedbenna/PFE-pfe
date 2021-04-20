import React from 'react'

import { withStyles } from '@material-ui/core/styles';

import { TextField, Button, Typography, Grid, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

import axios from 'axios'
import DateFnsUtils from '@date-io/date-fns';


import moment from 'moment'
// import { date } from 'yup';

const styles = {
    form: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {

        width: 200,
    },
}
class AjouterDisponibilite extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dat: new Date(),
            date: '',
            duree: '',
            lunD: '',
            lunF: '',
            marD: '',
            marF: '',
            mercD: '',
            mercF: '',
            jeuD: '',
            jeuF: '',
            venD: '',
            venF: '',
            semD: '',
            semF: '',
            dispo: [],
            id: JSON.parse(localStorage.getItem('doctorInfo')).id,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        }
        )
        // console.log(this.state.dispo)

    }
    handleSubmit(e) {
        e.preventDefault()
        // const date=this.state.lunD
        this.setState({ date: this.state.lunD })
        let dis = moment(this.state.dat+"T"+this.state.date);
        

        if (moment(this.state.lunD, 'hh:mm').isBefore(moment(this.state.lunF, 'hh:mm'))) {
            let dis = moment(this.state.dat+"T"+this.state.date);
            this.state.dispo.push(moment(dis).format())
            console.log('azeazeaze', this.state.date)
            this.setState({ date: moment(this.state.lunD, "hh:mm").add(this.state.duree, 'minutes').format("HH:mm") })
            // moment(date,'h:mma').add(this.state.duree,'minutes')
        }


        // console.log (moment(this.state.lunD, "hh:mm").add(this.state.duree, 'minutes').format("HH:mm"))

        const url = 'http://localhost:8080/api/medecins/' + this.state.id + '/disponibilites'
        axios.post(url, this.state.dispo)
            .then(res => {
                console.log(res)
            })
            .catch(res => {
                console.log(res)
            })
    }
    render() {

        const { classes } = this.props;
        console.log(this.state)



        return (
            <div>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    name='dat'
                    defaultValue={new Date()}
                    value={this.state.dat}
                    onChange={this.handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
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
                <Grid spacing={1} container>
                    <Grid item>
                        <Typography variant='h5'> lundi</Typography>
                        <Typography> debut</Typography>
                        <TextField
                            value={this.state.value}
                            onChange={this.handleChange}
                            type='time'
                            name='lunD'

                        />
                        <Typography> fin</Typography>
                        <TextField
                            value={this.state.value}
                            onChange={this.handleChange}
                            type='time'
                            name='lunF'

                        />

                    </Grid>
                    <Grid item>
                        <Typography variant='h5'> mardi</Typography>
                        <Typography> debut</Typography>
                        <TextField
                            value={this.state.value}
                            onChange={this.handleChange}
                            type='time'
                            name='marD'

                        />
                        <Typography> fin</Typography>
                        <TextField
                            value={this.state.value}
                            onChange={this.handleChange}
                            type='time'
                            name='marF'

                        />

                    </Grid>
                    <Grid item>
                        <Typography variant='h5'> mercredi</Typography>
                        <Typography> debut</Typography>
                        <TextField
                            value={this.state.value}
                            onChange={this.handleChange}
                            type='time'
                            name='mercD'

                        />
                        <Typography> fin</Typography>
                        <TextField
                            value={this.state.value}
                            onChange={this.handleChange}
                            type='time'
                            name='mercF'

                        />

                    </Grid>
                    <Grid item>
                        <Typography variant='h5'> jeudi</Typography>
                        <Typography> debut</Typography>
                        <TextField
                            value={this.state.value}
                            onChange={this.handleChange}
                            type='time'
                            name='jeuD'

                        />
                        <Typography> fin</Typography>
                        <TextField
                            value={this.state.value}
                            onChange={this.handleChange}
                            type='time'
                            name='jeuF'

                        />

                    </Grid>
                    <Grid item>
                        <Typography variant='h5'> vendredi</Typography>
                        <Typography> debut</Typography>
                        <TextField
                            value={this.state.value}
                            onChange={this.handleChange}
                            type='time'
                            name='venD'

                        />
                        <Typography> fin</Typography>
                        <TextField
                            value={this.state.value}
                            onChange={this.handleChange}
                            type='time'
                            name='venF'

                        />

                    </Grid>
                    <Grid item>
                        <Typography variant='h5'> samedi</Typography>
                        <Typography> debut</Typography>
                        <TextField
                            value={this.state.value}
                            onChange={this.handleChange}
                            type='time'
                            name='semD'

                        />
                        <Typography> fin</Typography>
                        <TextField
                            value={this.state.value}
                            onChange={this.handleChange}
                            type='time'
                            name='semF'

                        />

                    </Grid>
                </Grid>
                <Button onClick={this.handleSubmit}>Confermer</Button>
            </div>
        )
    }
}
export default withStyles(styles)(AjouterDisponibilite)
