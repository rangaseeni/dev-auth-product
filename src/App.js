import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Routenav from './components/Routenav';
import { useAuth0 } from '@auth0/auth0-react';
import PulseLoader from "react-spinners/PulseLoader";
import {
  BrowserRouter as Router
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const { isAuthenticated, isLoading, user, logout } = useAuth0();
  const [on, onSetTheme] = useState(0);
  const onClickTheme = () => onSetTheme(count => count + 1);

  if (isLoading) {
    return (
      <div className="Hvh-100 d-flex align-items-center">
        <div className="sweet-loading col-sm-4 offset-sm-4 col-md-2 offset-md-5">
          <PulseLoader size={20} color={"#36D7B7"} margin={10} loading="true" />
        </div>
      </div>
    );  
  }
  if (isAuthenticated) {
    return (
    <>
      <Header userdet={user} loggedout={logout} settheme={onClickTheme} colcnt={on}/>
      <Router>
        <Routenav userdet={user} colcnt={on}/>
      </Router>
    </>
    )
  } else {
    return (
      <Login />
    );
  }
}

export default App;
