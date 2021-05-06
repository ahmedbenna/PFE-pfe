import './App.css';
import React from 'react'
import Nav from './components/Nav';
import Login from './components/Patient/Login';
import Signup from './components/Patient/Signup';
import Main from './components/Main/Main';
import LoginDoc from './components/Doctor/LoginDoc';

import { CssBaseline } from '@material-ui/core/';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer';
import ProfileDoctor from './components/Doctor/ProfileDoctor';
import PatientProfile from './components/Patient/PatientProfile'
import Doctorprofi from './components/Doctor/Doctorprofi'
import SearchComp from './components/Recherche/SearchComp';
import Result from './components/Recherche/Result';
import PatientProfileEdit from './components/Patient/PatientProfileEdit';
import DoctorSignup from './components/Doctor/DoctorSignup';
import PatientProtectedRoute from './components/Patient/PatientProtectedRoute';
import DoctorProtectedRoute from './components/Doctor/DoctorProtectedRoute';
import Famille from './components/Patient/Famille';
import AjouterMembre from './components/Patient/AjouterMembre';
import AjouterVille from './components/AjouterVille';
import AjouterSpecialite from './components/AjouterSpecialite';
import PatientLogin from './components/Patient/PatientLogin';
import ConfermerRDV from './components/Patient/ConfermerRDV';
import RdvComplited from './components/Patient/RdvComplited';
import PatientSignupComplited from './components/Patient/PatientSignupComplited';





function App() {

  
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/components/Login' component={Login} />
          <Route path='/components/Signup' component={Signup} />
          <Route path='/components/LoginDoc' component={LoginDoc} />
          <Route path='/components/Result' component={Result} />
          <Route path='/components/SearchComp' component={SearchComp} />
          <Route path='/components/DoctorSignup' component={DoctorSignup} />
          <Route path='/components/PatientLogin' component={PatientLogin}/>
          <DoctorProtectedRoute path='/components/ProfileDoctor' component={ProfileDoctor} isAuth={localStorage.getItem('doctorInfo')} />
          <DoctorProtectedRoute path='/components/Doctorprofi' component={Doctorprofi} isAuth={localStorage.getItem('doctorInfo')} /> 
          <PatientProtectedRoute path='/components/PatientSignupComplited' component={PatientSignupComplited} isAuth={localStorage.getItem('patientInfo')} />
          <PatientProtectedRoute path='/components/RdvComplited' component={RdvComplited} isAuth={localStorage.getItem('patientInfo')} />
          <PatientProtectedRoute path='/components/PatientProfileEdit' component={PatientProfileEdit} isAuth={localStorage.getItem('patientInfo')} />
          <PatientProtectedRoute path='/components/PatientProfile' component={PatientProfile} isAuth={localStorage.getItem('patientInfo')} />
          <PatientProtectedRoute path='/components/Famille' component={Famille} isAuth={localStorage.getItem('patientInfo')} />
          <PatientProtectedRoute path='/components/AjouterMembre' component={AjouterMembre} isAuth={localStorage.getItem('patientInfo')} />
          <PatientProtectedRoute path='/components/ConfermerRDV' component={ConfermerRDV} isAuth={localStorage.getItem('patientInfo')} />


          <Route path='/components/AjouterVille' component={AjouterVille} />
          <Route path='/components/AjouterSpecialite' component={AjouterSpecialite} />

        </Switch>
        <Footer />

      </Router>

    </div>
  );
}

export default App;
