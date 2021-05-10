import React, { Component } from 'react'

import { TextField, Grid, Container,TextareaAutosize, CssBaseline, Button, FormControl, Select, InputLabel, MenuItem } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import { withRouter } from 'react-router-dom'

import axios from 'axios'

const styles = {
    paper: {
        // marginTop: "50px" ,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    btn: {
        backgroundColor: '#1de9b6',
        color: '#FFFFFF',
    },
    formControl: {
        justifyContent: 'center',
        width: 'calc(400px - 5px)',
    },
    presentation:{
        width :'400px',
        borderRadius :'5px',
        backgroundColor: '#F0F0F0',
        borderColor:'#bdbdbd',
        
    },

};

class ModifierMDP extends Component {
    constructor(props) {
        super(props)
        const doc = JSON.parse(localStorage.getItem('doctorInfo'))
        const url = "http://localhost:8080/api/medecins/" + doc.id
        axios.get(url)
            .then(res => localStorage.setItem('doctorInfo', JSON.stringify(res.data)))
            .catch(err => console.log(err))
        const doctor = JSON.parse(localStorage.getItem('doctorInfo'))
        this.state = {
            nouveauMotDePasse:'',
            ancienMotDePasse:''
           

           
        }

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log(this.state);
        })

    }

  
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            ancienMotDePasse: this.state.ancienMotDePasse,
            nouveauMotDePasse: this.state.nouveauMotDePasse,
            
        };
        console.log(data)

        const url = "http://localhost:8080/api/medecins/"+this.state.id
        axios.put(url, data)
            .then(res => {console.log(res)
                const url='http://localhost:8080/api/medecins/'+this.state.id
                axios
                    .get(url)
                    .then(res=>{console.log('getmed',res)
                          localStorage.setItem('doctorInfo', JSON.stringify(res.data))})})
            .catch(err => console.log(err));
    };
    render() {

        const { classes } = this.props;



        return (
            <div>
                <Container component="main" maxWidth="xs" style={{ height: "600px", backgroundColor: '#F0F0F0', borderRadius: "15px" }}>
                    <CssBaseline />
                    <div className={classes.paper}>
                        <form onSubmit={this.handleSubmit} style={{ padding: '20px' }}>
                            <Grid spacing={2} justify='center' container sx={11}>
                                <Grid item xs={12} sm={6}>
                                    <TextField   className={classes.text} value={this.state.ancienMotDePasse} onChange={this.handleChange} name='ancienMotDePasse' label='AncienMotDePasse' variant='standard' fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField   className={classes.text} value={this.state.nouveauMotDePasse} onChange={this.handleChange} name='nouveauMotDePasse' label='NouveauMotDePasse' variant='standard' fullWidth />
                                </Grid>
                                

                                <Grid item xs={12}>
                                    <Button type='submit' onClick={this.handleSubmit} fullWidth className={classes.btn}>
                                        Changer
                            </Button>
                                </Grid>
                            </Grid>

                        </form>
                    </div>
                </Container>
            </div>
        )
    }
}
export default withRouter(withStyles(styles)(ModifierMDP))
