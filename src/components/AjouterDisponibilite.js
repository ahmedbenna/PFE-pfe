import React from 'react'

import { withStyles } from '@material-ui/core/styles';

import { TextField, Button } from '@material-ui/core'

import axios from 'axios'

import moment from 'moment'
import { date } from 'yup';

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
            dispo: '',
            id: JSON.parse(localStorage.getItem('doctorInfo')).id,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        },
        )

    }
    handleSubmit(e) {
        e.preventDefault()
        console.log(moment().format(this.state.dispo))
        const url='http://localhost:8080/api/medecins/'+this.state.id+'/disponibilites'
        axios.post(url,[{dateTime: moment().format(this.state.dispo)}])
        .then(res =>{
            console.log(res)
        })
        .catch(res => {
            console.log(res)
        })
    }
    render() {

        const { classes } = this.props;


        return (
            <div>
                <form onSubmit={this.handleSubmit} className={classes.form} >
                    <TextField
                        id="disponibilite"
                        label="Ajouter disponibilite"
                        type="datetime-local"
                        name="dispo"
                        value={this.state.value}
                        onChange={this.handleChange}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button type='submit'>Ajouter</Button>
                </form>
            </div>
        )
    }
}
export default withStyles(styles)(AjouterDisponibilite)