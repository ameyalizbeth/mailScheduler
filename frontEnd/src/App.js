import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

import SignUp from './Components/auth-pages/SignUp';
import Login from './Components/auth-pages/Login';
import Logout from './Components/auth-pages/Logout';
import OnLand from './Components/dash-pages/OnLand';
import Index from './Components/dash-pages/Index';
import Dash from './Components/dash-pages/Dash';
function App() {
  return (
    <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={OnLand} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={SignUp} />
                    <Route path="/index" component={Index}/>
                    <Route path='/dash' component={Dash} />
                    

                    {/* <Route path='/home' component={Home} /> */}
                    <Route path='/logout' component={Logout} />
                    
                </Switch>
            </BrowserRouter>
  );
}

export default App;
