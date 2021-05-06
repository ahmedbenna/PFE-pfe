import React, { Component } from 'react'

import { Grid, Typography, Divider } from '@material-ui/core'
import MemberFamille from './MemberFamille'
import ModifierMembre from './ModifierMembre'



import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import axios from 'axios'
import MembreDelete from './MembreDelete';



const styles = {

    link: {
        textDecoration: 'none',
        color: 'rgb(0 35 75)'
    },

};


class Famille extends Component {
    state = {
        members: [],
        patient: JSON.parse(localStorage.getItem("patientInfo")),
    }
    componentDidMount() {
        const url = 'http://localhost:8080/api/comptePatients/' + this.state.patient.id + '/patients'
        console.log("memberisssssddddddd", this.state.patient.id)
        axios.get(url)
            .then(res => {
                console.log("membre :", res.data);
                this.setState({ members: res.data });

            }
            )
    }

    render() {
        const { classes } = this.props;
        const patient = JSON.parse(localStorage.getItem('patientInfo'))
        console.log("memmmmmmm", this.state.members)

        return (
            <div className={classes.contaier}>
                <Grid contaier spacing={1}>
                    <Grid item>
                        <Link to='/components/PatientProfile' className={classes.link}>
                            <Typography variant="h6">
                                Responsable : {patient.patientPrincipal.nom} {patient.patientPrincipal.prenom}
                            </Typography>
                        </Link>
                    </Grid>


                    {this.state.members.map(member =>

                        <Grid item xs={12} >
                            <Divider />
                            <Grid container>
                                
                                <Grid item>
                                    <MemberFamille
                                        id={member.id}
                                        nom={member.nom}
                                        prenom={member.prenom}
                                        dateDeNaissance={member.dateDeNaissance}
                                        adresse={member.adresse}
                                        telephone={member.telephone}
                                        genre={member.genre}

                                    />
                                </Grid>
                                <Grid item>
                                    <ModifierMembre
                                        pat={member}
                                    />
                                    
                                </Grid>
                                <Grid item>
                                    <MembreDelete
                                        id={member.id}
                                        nom={member.nom}
                                        prenom={member.prenom}
                                        dateDeNaissance={member.dateDeNaissance}
                                        adresse={member.adresse}
                                        telephone={member.telephone}
                                        genre={member.genre}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    )}
                </Grid>

            </div>
        )
    }
}
export default withStyles(styles)(Famille)