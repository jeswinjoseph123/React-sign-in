import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <nav className="navbar navbar-expand navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={'/'}>Home</Link>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-items">
                    <Link className="nav-link" to={'/Login'}>Login</Link>
                  </li>
                  <li className="nav-items">
                    <Link className="nav-link" to={'/Register'}>Sign up</Link>
                  </li>
                </ul>
    
              </div>
            </div>
          </nav>

        )
    }
}
export default Nav;