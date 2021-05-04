import { Typography, Grid } from '@material-ui/core'
import React from 'react'
import AjouterDisponibilite from './AjouterDisponibilite'
import AfficherCalendre from './AfficherCalendre'

export default function Disponibilite() {
    return (
        <div>
            <Grid container direction="column" alignItems="center" justify="center">
                <Grid item>
                    <Typography variant='h5'> Ajouter disponibilites </Typography>
                </Grid>
                <Grid item>
                    <AjouterDisponibilite/>
                </Grid>
                <Grid item>
                <AfficherCalendre/>
                </Grid>
                
            </Grid>
            
        </div>
    )
}
