import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import Navbar from "./Navbar.js"
import './Login.css';

class StudentLogin extends Component {


  render() {
    return (
      <div>
          <div id="sidebar" className="">
          <div className="toggle-btn mx-auto" >
                      <h3 className= "bg-dark tc">Student Profile</h3>
          </div>
          <ul>
          <p className="mt-5"> </p>
          <a href = ""><li>My Profile</li></a>
          <a href = ""><li>Send Certificate</li></a>
          </ul>
        </div>

        <div className="container-fluid ml-15">
          <form>
            <label></label> <label></label>
          </form>
        </div>
    </div>
    );
  }
}

export default StudentLogin;
