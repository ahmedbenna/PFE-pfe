import React from 'react'
// import './Main.css'
import { withStyles } from '@material-ui/core/styles';

import home from '../../img/home.svg'
import doccard from '../../img/docscard.svg'

import appointement from '../../img/appointement.svg'
import fast from '../../img/fast.svg'
import tim from '../../img/time.svg'


import { Typography, CssBaseline, Grid, } from '@material-ui/core/';
import MainCard from './MainCard';
import SearchComp from '../Recherche/SearchComp';







const styles = {
    img: {


    },
    searchdiv: {
        backgroundImage: `url(${home})`,
        backgroundColor: ' #363768',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'noRepeat',
        height: '500px',
    },
    searchinput: {
        alignContent: 'center',
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    textsearch: {
        display: 'flex',
        justifyContent: 'center',
        color: '#FFFFFF',
        font: 'roboto',
        fontWeight: '700',


    },
    text2search: {
        display: 'flex',
        justifyContent: 'center',
        color: '#FFFFFF',
        font: 'roboto',
        fontWeight: '500',
        marginTop: '10px',



    },
    gridcenter: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px',

    },

    searchtext: {
        marginTop: '100px',

        // backgroundColor: 'rgba(0,0,10,0.2)',
        // backdropFilter: "blur(3px)",
        maxWidth: '700px',



    },
    text3: {
        color: '#555',
        justifyContent: 'center',
    },
    paper: {

        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px',


    }

}

class Main extends React.Component {




    render() {
        const { classes } = this.props;



        return (
            <div>
                <CssBaseline />

                <div className={classes.searchdiv} >
                    <div className={classes.img}>

                        <Grid direction='column' container alignItems='center' alignContent='center'  >
                            <Grid item xs={12} style={{ padding: '10px' }} >
                                <div className={classes.searchtext}>
                                    <Typography variant="h3" className={classes.textsearch}>
                                        Chercher un médecin local par:
                                </Typography>
                                    <Typography variant="h5" className={classes.text2search}>
                                        ville ou spécialté
                                </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} >
                                <SearchComp />
                            </Grid>
                        </Grid>
                    </div>


                </div>
                <div style={{paddingTop:'50px'}} >
                    <Grid container direction="column"alignItems="center"justify="center"  item xs={12} spacing={3}  >
                        <Grid item xs={12} spacing={3} >
                            <Typography justify='center' variant="h5" className={classes.text3}>
                                DÉCOUVREZ LE RENDEZ-VOUS EN LIGNE!
                            </Typography>
                        </Grid>
                        <Grid item xs={12} spacing={3} >
                           <img src={appointement} style={{maxWidth:'400px'}}/>
                        </Grid>
                    </Grid>
                </div>
                <div style={{paddingTop:'50px'}} >
                    <Grid container direction="column"alignItems="center"justify="center" item xs={12} spacing={3}  >
                        <Grid item xs={12} spacing={3} >
                            <Typography variant="h5" className={classes.text3}>
                                Pourquoi prendre rendez-vous online ?
                        </Typography>
                        </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={3} >
                        <Grid item xs={12} sm={4} className={classes.paper} >
                            <MainCard
                                imgURL={tim}
                                name="24/7"
                                discription="texte"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} className={classes.paper} >
                            <MainCard
                                imgURL=""
                                name="Gratuit"
                                discription=" texte"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} className={classes.paper} >
                            <MainCard
                                imgURL={fast}
                                name="Rapide"
                                discription="texte"
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(Main)
