import React from 'react'

export default function PatientEditDialog() {
    return (
        <div>
            <Dialog open={this.state.open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Mon profil</DialogTitle>
                    <DialogContent>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="prenom"
                                        variant="standard"

                                        onChange={this.handleChange}
                                        value={this.state.prenom}
                                        fullWidth
                                        id="prenom"
                                        label="Prenom"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="standard"

                                        fullWidth
                                        onChange={this.handleChange}
                                        value={this.state.nom}
                                        id="nom"
                                        label="Nom"
                                        name="nom"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="standard"

                                        fullWidth
                                        onChange={this.handleChange}
                                        value={this.state.email}
                                        id="email"
                                        label="adresse Email"
                                        name="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="standard"

                                        fullWidth
                                        onChange={this.handleChange}
                                        value={this.state.telephone}
                                        name="telephone"
                                        label="telephone"
                                        type="number"
                                        id="telephone"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="standard"

                                        fullWidth
                                        onChange={this.handleChange}
                                        value={this.state.adresse}
                                        name="adresse"
                                        label="adresse"
                                        id="adresse"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            disableToolbar
                                            variant="inline"
                                            format="MM/dd/yyyy"
                                            margin="normal"
                                            label="Date de naissance"

                                            onChange={this.handleChange}
                                            value={this.state.dateDeNaissance}
                                            fullWidth
                                            name="dateDeNaissance"
                                            id="dateDeNaissance"
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>


                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend" >genre</FormLabel>
                                        <RadioGroup aria-label="gender" name="genre" value={this.state.genre} onChange={this.handleChange}>
                                            <FormControlLabel value="femme" control={<Radio />} label="Femme" />
                                            <FormControlLabel value="homme" control={<Radio />} label="Homme" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </form>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.handleSubmit} color="primary">
                            Confermer
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Annuler
                        </Button>
                    </DialogActions>
                </Dialog>
        </div>
    )
}
