
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

class AjouterDispoSemaine extends Component {
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
export default withStyles(styles)(AjouterDispoSemaine)
