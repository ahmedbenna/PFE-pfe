import React from 'react'

import { Search } from '@material-ui/icons';

import { withStyles } from '@material-ui/core/styles';

import { CssBaseline, TextField, Grid, Button, MenuItem, FormControl, Select, InputLabel } from '@material-ui/core/';

import Autocomplete from '@material-ui/lab/Autocomplete';

import { Link } from 'react-router-dom'

import axios from 'axios'
import { withRouter } from "react-router-dom";




const styles = {


    search: {
        padding: '50px',
        alignItems: 'center',
    },
    searchbutton: {
        height: '56px',
        width: '200px',
        color:'#ffffff',
        backgroundColor: '#f06024',
    },
    searchfield: {
        backgroundColor: '#FFFFFF',
        color: '#FFFFFF',
        background: '#8ADEFF',
        justifyContent: 'center',
        width: 'calc(400px - 5px)',
    },
    formControl: {
        backgroundColor: '#FFFFFF',
        color: '#FFFFFF',
        background: '#8ADEFF',
        justifyContent: 'center',
        width: 'calc(200px - 5px)',
    }

}

class SearchComp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            etat: '',
            specialites: [],
            specialite: '',
            villes: [],
            ville: '',


        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        

        axios.get('http://localhost:8080/api/specialites')
            .then(res => {
                localStorage.setItem('specialites', JSON.stringify(res.data))
                this.setState({ specialites: JSON.parse(localStorage.getItem("specialites")) });

            }
            )
        axios.get('http://localhost:8080/api/villes')
            .then(res => {
                localStorage.setItem('villes', JSON.stringify(res.data))
                this.setState({ villes: JSON.parse(localStorage.getItem("villes")) });
            }
            )
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log(e.target.value)
        })
    }

    handleSubmit = (event) => {
         event.preventDefault()
         localStorage.removeItem('docs')

        
        if ((this.state.specialite !=='') && (this.state.ville !=='')){
            const url = 'http://localhost:8080/api/specialites/'+this.state.specialite+'/villes/'+this.state.ville+'/medecins'
            axios.get(url)
                .then(res => {
                    console.log("recherche",res.data)
                    localStorage.setItem('docs',JSON.stringify(res.data))
                    this.props.history.push('/components/Result')
                })
                .catch(res =>
                    console.log(res))
        }
        else if((this.state.specialite !=='')){
            const url = 'http://localhost:8080/api/specialites/'+this.state.specialite+'/medecins'
            axios.get(url)
                .then(res => {
                    localStorage.setItem('docs',JSON.stringify(res.data))
                    console.log("recherche",res.data)
                    this.props.history.push('/components/Result')
                   
                })
                .catch(res =>
                    console.log(res.data))
        }
        else if(this.state.ville !==''){
            const url = 'http://localhost:8080/api/villes/'+this.state.ville+'/medecins'
            axios.get(url)
                .then(res => {
                    console.log("recherche",res.data)
                    localStorage.setItem('docs',JSON.stringify(res.data))
                    this.props.history.push('/components/Result')
                })
                .catch(res =>
                    console.log(res))
        }
        // window.location.reload(false)


    }
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.div}>
                <CssBaseline />

                <form onSubmit={this.handleSubmit}>
                    <div className={classes.search}>
                        <Grid container justify='center'>
                            <Grid item>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel >Ville</InputLabel>
                                    <Select
                                        labelId="v"
                                        name="ville"
                                        value={this.state.ville}
                                        onChange={this.handleChange}
                                    >
                                        {this.state.villes.map(vill =>
                                            <MenuItem value={vill.id}> {vill.ville} </MenuItem >
                                        )}

                                    </Select>
                                </FormControl>

                            </Grid>

                            <Grid item>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel >Specialite</InputLabel>
                                    <Select
                                        labelId="specialite"
                                        name="specialite"
                                        value={this.state.specialite}
                                        onChange={this.handleChange}
                                    >
                                        {this.state.specialites.map(specia =>
                                            <MenuItem value={specia.id}> {specia.libelle} </MenuItem >
                                        )}

                                    </Select>
                                </FormControl>
                            </Grid>


                            <Grid item>
                                {/* <Link to='/components/Result'> */}
                                    <Button onClick={()=> console.log("azeqsdfdgsdgfsd")} type="submit" variant="contained" className={classes.searchbutton} ><Search fontSize="large" /> Recherche</Button>
                                {/* </Link> */}
                            </Grid>

                        </Grid>
                    </div>
                </form>
            </div>

        )
    }
}
export default withRouter(withStyles(styles)(SearchComp))
