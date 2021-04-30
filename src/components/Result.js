import React, {Component} from 'react'


import { Container, CssBaseline, Typography,  }  from '@material-ui/core/';
import Doctorcard from './Doctorcard';
import { withStyles } from '@material-ui/core/styles';


import axios from 'axios'
import SearchComp from './SearchComp';


const styles = {
    doctorcard : {
        backgroundColor:'#e0e0e0',
        
    },
    docs:{
        paddingLeft:'50px',
        paddingTop: '20px',
        paddingBottom: '5px',
    },
    search:{
        padding :'50px',
        justifyContent: 'center',
        backgroundColor : 'rgb(38 82 147)',
    },

};

class Result extends Component {
    state ={
        docs : []
    }
    constructor(){
        super();
        this.state={
            docs:JSON.parse(localStorage.getItem("docs"))

        }
        localStorage.removeItem('dispo')
    }
    
    render(){
        console.log("docs",this.state)
        const {classes} = this.props;
    return (
        <div className={classes.doctorcard}>
            <CssBaseline/>
            <Container className={classes.search}>
                <SearchComp />
            </Container>
            <div className={classes.docs}>
            {(this.state.docs !=[])?(
            this.state.docs.map(doc =>
                <Doctorcard 
                doc={doc}
                img='../img/doc.png'
                nom= {doc.nom} 
                specialite={doc.specialite.libelle}
                address={doc.adresse}
                ville={doc.ville.ville}
            />
            )):(<Typography>Vide</Typography>)
        }

            
           
            </div>
        </div>
    )
    }
}


export default  withStyles(styles)(Result)
 