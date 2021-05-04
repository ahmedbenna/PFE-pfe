import React, { Component } from 'react'

import {  Container,  Typography,CssBaseline, TextField, Grid, Button, MenuItem, FormControl, Select, InputLabel } from '@material-ui/core/';

import Doctorcard from './Doctorcard';
import { Search } from '@material-ui/icons';

import { withStyles } from '@material-ui/core/styles';


import axios from 'axios'
import SearchComp from './SearchComp';


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
    },
    doctorcard: {
        backgroundColor: '#FFFFFF',

    },
    docs: {
        display: 'flex',  
        justifyContent:'center',
        alignItems:'center',
        paddingTop: '20px',
        paddingBottom: '5px',
    },
    search: {
        padding: '50px',
        justifyContent: 'center',
        backgroundColor: 'rgb(38 82 147)',
    },

};

class Result extends Component {

    constructor() {
        super();
        this.state = {
            etat: '',
            specialites: [],
            specialite: '',
            villes: [],
            ville: '',
            docs: JSON.parse(localStorage.getItem("docs"))

        }
        // localStorage.removeItem('dispo')
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
    
    // getDocs = () => {
    //     // this.setState({docs})
    //     this.setState({ docs: JSON.parse(localStorage.getItem("docs")) })

    // }



    componentDidUpdate(prevProps, prevState) {
        // this.getDocs()
        // if (prevState.docs !== this.state.docs) {
        //     this.setState({ docs: JSON.parse(localStorage.getItem("docs")) })
        // }
        // // else if(prevState.docs === this.state.docs){
        // //     this.setState({docs:[]})
        // // }
        if(prevState.docs!== this.state.docs){
            this.setState({})
        }
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
                   this.setState({docs:res.data})
                })
                .catch(res =>
                    console.log(res))
        }
        else if((this.state.specialite !=='')){
            const url = 'http://localhost:8080/api/specialites/'+this.state.specialite+'/medecins'
            axios.get(url)
                .then(res => {
                 
                    console.log("recherche",res.data)
                    this.setState({docs:res.data})

                   
                })
                .catch(res =>
                    console.log(res.data))
        }
        else if(this.state.ville !==''){
            const url = 'http://localhost:8080/api/villes/'+this.state.ville+'/medecins'
            axios.get(url)
                .then(res => {
                    this.setState({docs:res.data})

                    console.log("recherche",res.data)
                 
                })
                .catch(res =>
                    console.log(res))
        }
        // window.location.reload(false)


    }


    render() {
        console.log(window.location.pathname)
        console.log("docs", this.state)
        const { classes } = this.props;
        return (
            <div className={classes.doctorcard}>
                <CssBaseline />
                <Container className={classes.search}>
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
                                        <Button onClick={() => console.log("azeqsdfdgsdgfsd")} type="submit" variant="contained" className={classes.searchbutton} ><Search fontSize="large" /> Recherche</Button>
                                        {/* </Link> */}
                                    </Grid>

                                </Grid>
                            </div>
                        </form>
                    </div>
                </Container>
                <div className={classes.docs}>
                    {((this.state.docs !== null)&&(this.state.docs !== [])) ? (
                        this.state.docs.map(doc =>
                            <Doctorcard
                                doc={doc}
                                img='../img/doc.png'
                                prenom={doc.prenom}
                                nom={doc.nom}
                                specialite={doc.specialite.libelle}
                                address={doc.adresse}
                                ville={doc.ville.ville}
                            />
                        )) :(this.state.docs == [])?
                        (<Typography>loading</Typography>)
                        : 
                        (<Typography>Vide</Typography>)

                    }



                </div>
            </div>
        )
    }
}


export default withStyles(styles)(Result)
