import React,{useEffect} from 'react'

import {Search} from '@material-ui/icons';

import { withStyles } from '@material-ui/core/styles';

import {  CssBaseline, Grid, Button, TextField, Link, MenuItem, FormHelperText, FormControl, Select, InputLabel  }  from '@material-ui/core/';

import Autocomplete from '@material-ui/lab/Autocomplete';

import axios from 'axios'
import { getDisplayDate } from '@material-ui/pickers/_helpers/text-field-helper';



const styles = {

    
    search:{
        padding :'50px',
        alignItems:'center',
    },
    searchbutton: {
        height: '56px',
        width: '200px',
        backgroundColor :'#8ADEFF',
    },
    searchfield:{
        backgroundColor: '#FFFFFF',
        color: '#FFFFFF',
        background :'#8ADEFF',
        justifyContent: 'center',
        width: 'calc(400px - 5px)',
    },
    formControl:{
        backgroundColor: '#FFFFFF',
        color: '#FFFFFF',
        background :'#8ADEFF',
        justifyContent: 'center',
        width: 'calc(200px - 5px)',
    }

}

class SearchComp extends React.Component {

    constructor(props){
        super(props)
        this.state={
            nom:'',
            medecins: JSON.stringify(localStorage.getItem("medecins"))
            
    
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        
            //  axios.get('http://localhost:8080/api/specialites')
            // .then(res => {           
            //   localStorage.setItem('specialites',JSON.stringify(res.data))
            //   this.state.specialites = JSON.parse(localStorage.getItem("specialites"))
      
            // }
            // ) 
            //  axios.get('http://localhost:8080/api/villes')
            // .then(res => {           
            //   localStorage.setItem('villes',JSON.stringify(res.data))
            //   this.state.villes = JSON.parse(localStorage.getItem("villes"))
      
            // }
            // ) 
          
         
           
        
           
    }
    
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value},()=>{
                console.log(e.target.value)
        })
    }

     handleSubmit = (event) => {
         event.preventDefault()
            const url='http://localhost:8080/api/nom/'+this.state.id+'/villes/'+this.state.ville+'/medecins'
            axios.get(url)
            .then(res =>{
                console.log(res.data)
                localStorage.setItem('docs'.JSON.stringify(res.data))
            })
            .catch(res =>
                console.log(res.data))        
    }
    render(){
        const {classes} = this.props;
        

        return (
            <div className={classes.div}>  
                <CssBaseline/>

                <form onSubmit={this.handleSubmit}>
                <div className={classes.search}>
                    <Grid container justify='center'>
                        <Grid item>
                        
                            <Autocomplete
                                name="nom"
                                options={this.state.medecins}
                                getOptionLabel={(option) => option.nom,option.prenom}
                                style={{ justifyContent: 'center',backgroundColor: '#FFFFFF',width: 'calc(200px - 5px)', }}
                                renderInput={(params) => <TextField 
                                                            {...params} 
                                                            label="nom" 
                                                            onChange={this.handleChange} 
                                                            value={this.state.nom}
                                                            variant="outlined" 
                                                        />}
                            />
                        </Grid>
                        
                        
                                
                        <Grid item>
                            <Link  to='/components/Result'> 
                                <Button type="submit"  variant="contained" className={classes.searchbutton} ><Search fontSize="large"/> Recherche</Button> 
                            </Link>
                        </Grid>
                    </Grid>
                    </div>
                </form>
            </div>
            
        )
        }
    }
export default withStyles(styles)(SearchComp)
