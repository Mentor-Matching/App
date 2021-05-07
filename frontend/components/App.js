import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import RegisterSchool from './pages/RegisterSchool';
import MyInterest from './pages/MenteeProfile';
import Calendar from './pages/Calendar';
import Reviews from './pages/Reviews';
// import { SignUpContext } from './SignUpContext'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/sign-up/basic-info' component={RegisterSchool} />
        <Route exact path='/profile/mentee' component={MenteeProfile} />
        <Route exact path='/calendar' component={Calendar} />
        <Route exact path='/reviews' component={Reviews} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))