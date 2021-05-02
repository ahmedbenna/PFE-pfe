import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import { render } from '@testing-library/react'
import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import axios from 'axios'
import moment from 'moment';
import SupprimerRDV from './SupprimerRDV';
import PatientModifierRDV from './PatientModifierRDV';

const styles = {
    root: {
        width: 300,

    },

    title: {
        fontSize: 16,
        fontWeight: 500,
    },

};
class PatientRDV extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            patient: JSON.parse(localStorage.getItem('patientInfo')),
            rdv: [],
            members: [],

        }
    }
    componentDidMount() {
        this.getRdV()

        const url = 'http://localhost:8080/api/comptePatients/' + this.state.patient.id + '/patients'
        console.log("memberisssssddddddd", this.state.patient.id)
        axios.get(url)
            .then(res => {
                console.log("membre :", res.data);
                this.setState({ members: res.data });

            }
            )

    }
    getRdV() {
        const url = 'http://localhost:8080/api/comptePatients/' + this.state.patient.id + '/rendezvous'
        axios
            .get(url)
            .then(res => {
                console.log("rdv", res.data)
                this.setState({ rdv: res.data })
            })
            .catch(err => { console.log(err) })
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container>
                    <Grid item xs='auto' >
                        <Card className={classes.root} variant="outlined">
                            <CardContent  >
                                <Grid container spacing={3} direction='column' alignItems="center" justify='center'>

                                    <Grid item xs={12}>
                                        <Typography className={classes.title} gutterBottom>
                                            Moi: {this.state.patient.patientPrincipal.nom} {this.state.patient.patientPrincipal.prenom}
                                        </Typography>
                                        {this.state.rdv.map(r =>
                                            (r.patient.id == this.state.patient.patientPrincipal.id) ?
                                                (
                                                    <div>
                                                        <Grid direction='row' justify='center' alignContent='center' container>
                                                            <Grid item>
                                                                <Typography>rdv time: {moment(r.disponibilite.dateTime).calendar()}</Typography>
                                                                <Typography>medecin:{r.disponibilite.medecin.nom} {r.disponibilite.medecin.prenom} </Typography>

                                                            </Grid>
                                                            <Grid direction="column" alignContent='flex-end' justify='flex-end' item>
                                                                <SupprimerRDV rdv={r.id} />
                                                                <PatientModifierRDV doc={r.disponibilite.medecin} rdv={r.id} />
                                                            </Grid>
                                                        </Grid>




                                                    </div>
                                                ) : ('')
                                        )
                                        }
                                    </Grid>
                                </Grid>
                            </CardContent>

                        </Card>

                    </Grid>

                    {this.state.members.map(member =>

                        <Grid item xs='auto' >
                            <Card className={classes.root} variant="outlined">
                                <CardContent  >
                                    <Grid container spacing={3} direction='column' alignItems="center" justify='center'>

                                        <Grid item xs={12}>
                                            <Typography className={classes.title} gutterBottom>
                                                nom: {member.nom} {member.prenom}
                                            </Typography>
                                            {this.state.rdv.map(r =>
                                                (r.patient.id == member.id) ?
                                                    (
                                                        <div>
                                                            <Grid direction='row' justify='center' alignContent='center' container>
                                                                <Grid item>
                                                                    <Typography>rdv time: {moment(r.disponibilite.dateTime).calendar()}</Typography>
                                                                    <Typography>medecin:{r.disponibilite.medecin.nom} {r.disponibilite.medecin.prenom} </Typography>

                                                                </Grid>
                                                                <Grid direction="column" alignContent='flex-end' justify='flex-end' item>
                                                                    <SupprimerRDV rdv={r.id} />
                                                                    <PatientModifierRDV doc={r.disponibilite.medecin} rdv={r.id} />
                                                                </Grid>
                                                            </Grid>




                                                        </div>
                                                    ) : ('')
                                            )
                                            }
                                        </Grid>
                                    </Grid>
                                </CardContent>

                            </Card>

                        </Grid>


                    )}
                </Grid>




            </div>
        )
    }
}

export default withStyles(styles)(PatientRDV)
