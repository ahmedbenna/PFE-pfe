import React from 'react'

import { withStyles } from '@material-ui/core/styles';

import { Dialog, DialogTitle, DialogActions, DialogContent, TextField, Button, Typography, Grid, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

import axios from 'axios'
import DateFnsUtils from '@date-io/date-fns';
import { Add } from '@material-ui/icons';


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
            dat: '',
            date: '',
            duree: '',
            lunD: '',
            lunF: '',
         
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


        let m = moment(this.state.lunD, 'HH:mm').minutes()
        let m2 = moment(this.state.lunF, 'HH:mm').minutes()
        let h = moment(this.state.lunD, 'HH:mm').hour()
        let h2 = moment(this.state.lunF, 'HH:mm').hour()



        let dis = moment(this.state.dat)
        let dis2 = moment(this.state.dat)

        dis = moment(dis).add(m, 'minutes').format();
        dis = moment(dis).add(h, 'hour').format()

        dis2 = moment(dis2).add(m2, 'minutes').format();
        dis2 = moment(dis2).add(h2, 'hour').format()


        while (((moment(dis).isBefore(dis2))) || (moment(dis).isSame(dis2))) {
            

            const url = 'http://localhost:8080/api/medecins/' + this.state.id + '/disponibilites'
            axios.post(url, [{ "dateTime": moment(dis).format('yyyy-MM-DDTHH:mm') }])
                .then(res => {
                    console.log(res)
                    
                })
                .catch(res => {
                    console.log(res)
                })

            dis = moment(dis).add(this.state.duree, 'minutes').format()


        }


        console.log(moment(this.state.lunD, "HH:mm").add(this.state.duree, 'minutes').format("HH:mm"))
        window.location.reload(false)
        


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
                            <Grid spacing={2} container>
                                <Grid item >
                                    <TextField
                                        id="date"
                                        label="Jour"
                                        type="date"
                                        name='dat'
                                        defaultValue={new Date()}
                                        value={this.state.dat}
                                        onChange={this.handleChange}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
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
                            <Grid spacing={2} container>
                                <Grid item>
                                    {/* <Typography variant='h5'> lundi</Typography> */}
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
export default withStyles(styles)(AjouterDisponibilite)
