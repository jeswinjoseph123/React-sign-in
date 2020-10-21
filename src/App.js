import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import Login from './Login';
import Register from './Register';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route  path="/Login"><Login/></Route>
            <Route  path="/Register"><Register/></Route>
          </Switch>
        </div>
      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
