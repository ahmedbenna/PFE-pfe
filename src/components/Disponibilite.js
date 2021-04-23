import { Typography, Grid } from '@material-ui/core'
import React from 'react'
import AjouterDisponibilite from './AjouterDisponibilite'
import ModifierDisponibilite from './ModifierDisponibilite'

export default function Disponibilite() {
    return (
        <div>
            <Grid container>
                <Grid item>
                    <Typography variant='h5'> Ajouter disponibilites </Typography>
                </Grid>
                <Grid item>
                    <AjouterDisponibilite/>
                </Grid>
                <Grid item>

                </Grid>
                <ModifierDisponibilite/>
            </Grid>
            
        </div>
    )
}
