import './App.css';
import React from 'react'
import Nav from './components/Nav';
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';
import LoginDoc from './components/LoginDoc';

import { CssBaseline } from '@material-ui/core/';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer';
import ProfileDoctor from './components/ProfileDoctor';
import PatientProfile from './components/PatientProfile'
import Doctorprofi from './components/Doctorprofi'
import SearchComp from './components/SearchComp';
import Result from './components/Result';
import Calendar from './components/Calendar';
import Rendezvous from './components/Rendezvous';
import PatientProfileEdit from './components/PatientProfileEdit';
import DoctorSignup from './components/DoctorSignup';
import PatientProtectedRoute from './components/PatientProtectedRoute';
import DoctorProtectedRoute from './components/DoctorProtectedRoute';
import Famille from './components/Famille';
import AjouterMembre from './components/AjouterMembre';
import AjouterVille from './components/AjouterVille';
import AjouterSpecialite from './components/AjouterSpecialite';
import PatientLogin from './components/PatientLogin';
import ConfermerRDV from './components/ConfermerRDV';





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
          <Route path='/components/Calendar' component={Calendar} />
          <Route path='/components/Rendezvous' component={Rendezvous} />
          <Route path='/components/DoctorSignup' component={DoctorSignup} />
          <Route path='/components/PatientLogin' component={PatientLogin}/>
          {/* <DoctorProtectedRoute path='/components/DoctorRendezVous' component={DoctorRendezVous} isAuth={localStorage.getItem('doctorInfo')} /> */}
          <DoctorProtectedRoute path='/components/ProfileDoctor' component={ProfileDoctor} isAuth={localStorage.getItem('doctorInfo')} />
          <DoctorProtectedRoute path='/components/Doctorprofi' component={Doctorprofi} isAuth={localStorage.getItem('doctorInfo')} /> 
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
