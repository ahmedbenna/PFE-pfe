import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'
import axios from 'axios'


const styles = {
  paper: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: '10px',
   
  },
  form: {
    width: '100%', 
    marginTop: '10px',
  },
  submit: {
    marginTop:'20px',
    marginBottom :'20px',
    color: '#FFFFFF',
    // backgroundColor :'#2196F3',
  },
  link:{
    textDecoration: 'none', 
    color: '#616161',
  },
  
};
/*
const schema = yup.object().shape({
  email : yup.string().required(),
  password : yup.string().required().min(8),
})
*/


class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password:'',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  


  handleChange = e => {
    this.setState({[e.target.name] : e.target.value})

  

  }
  
  handleSubmit = e => {
    e.preventDefault()

    const data = {
     
      email: this.state.email,
      password: this.state.password,
    }

    console.log(this.state)

    axios.post('',data)
    .then (response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
    })
    
    axios.get('')
    .then (response => {
      localStorage.setItem('patientInfo',response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }
  

  render(){
      const {classes} = this.props;      
    /*  const SignIn = () => {
    
        const {signIn, handelSubmit, errors } = useForm({
          signIn : yupResolver(schema),
        })
       
      }
      */
     
      
  return (
    <div>
      <Container  component="main" maxWidth="xs" style={{ height:"350px", backgroundColor: '#FFFFFF',borderRadius: "15px"}}>
        <CssBaseline  />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" > 
            Se connecter
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit/*,SignIn.handelSubmit*/}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={this.state.email}
              onChange={this.handleChange}
              //ref={SignIn.login}
              id="email"
              label="Address Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            {/*}  <Typography>{SignIn.errors[email]?.message}</Typography>{*/}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={this.state.password}
              onChange={this.handleChange}
              //ref={SignIn.login}
              name="password"
              label="Mote de passe"
              type="password"
              id="password"
              autoComplete="current-password"
            />
           {/*}<Typography>{SignIn.errors[password]?.message}</Typography>{*/}
              <Button
              color='secondary'
                  type="submit"
                  fullWidth

                  variant="contained"
                  className={classes.submit}
              >
                  Se connecter
              </Button>
              <Link className={classes.link}>
                mote de passe oublié?
              </Link>
          </form>
        </div>
      </Container>
    </div>
  );
}
}
export default  withStyles(styles)(Login)
