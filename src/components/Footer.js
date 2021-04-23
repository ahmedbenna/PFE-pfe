import React from 'react'

import { Typography, Grid, Box,CssBaseline  }  from '@material-ui/core/';



export default function Footer() {
    return (
        <div className="">
            <CssBaseline/>
            <Box mt={8}>
                <Grid Container>
                    <Grid item>
                        <nav >                          
                            <ul>
                                About Us
                            </ul>
                            <ul>
                                FAQs
                            </ul>
                            <ul>
                                Contact Us
                            </ul>                      
                        </nav>   
                    </Grid>
                    <Grid item xs>
                        <Typography variant="body2" color="textSecondary" align="center">
                            {'Copyright © '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>
                    </Grid>
                   
                </Grid>
            </Box>
        </div>
    )
}
