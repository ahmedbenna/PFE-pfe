import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 200,
        height: 300,
    },

    title: {
        fontSize: 20,
        fontWeight:500,
    },
    pos: {
        marginBottom: 12,
    },
    avatar: {
        width: theme.spacing(14),
        height: theme.spacing(14),
      },
}));

export default function MemebersNameCard(props) {
    const classes = useStyles();

    return (
        <Card  className={classes.root} variant="outlined">
            <CardContent  >
                <Grid container spacing={3} direction='column' alignItems="center" justify='center'>
                    <Grid item  xs={12}  >
                        <Avatar className={classes.avatar} /> 
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.title}  gutterBottom>
                            {props.nom} {props.prenom}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                {/* <Button size="small">Learn More</Button> */}
            </CardActions>
        </Card>
    );
}
