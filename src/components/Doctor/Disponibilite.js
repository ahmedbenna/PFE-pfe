import { Typography, Grid } from '@material-ui/core'
import React from 'react'
import AjouterDisponibilite from './AjouterDisponibilite'
import AfficherCalendre from './AfficherCalendre'
import AjouterDispoSemaine from './AjouterDispoSemaine'

export default function Disponibilite() {
    return (
        <div>
            <Grid container direction="row" alignItems="center" justify="center">
                <Grid item xs={6}>
                    <Typography variant='h6'> Ajouter disponibilites par jour </Typography>
                </Grid>
                <Grid item >
                    <AjouterDisponibilite/>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h6'> Ajouter disponibilites par semain </Typography>
                </Grid>
                <Grid item >
                    <AjouterDispoSemaine/>
                </Grid>
                <Grid item>
                <AfficherCalendre/>
                </Grid>
                
            </Grid>
            
        </div>
    )
}
