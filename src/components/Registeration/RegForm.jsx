import React, { Component } from "react";
import { BeforeLoginNavbar } from "../../WebSiteMainPage/BeforeLoginNavbar";
import { HeaderControll } from "../Header/Header/HeaderControll";
import RegisterService from "../RegisterService/RegisterService";

class RegForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      fname: "",
      lname: "",
      username: "",
      mobilenumber: "",
      address: "",
      city: "",
      state: "",
      email: "",
      password: "",
    };

    this.changeType = this.changeType.bind(this);
    this.changeFname = this.changeFname.bind(this);
    this.changeLname = this.changeLname.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
    this.changeMobileNumber = this.changeMobileNumber.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changeCity = this.changeCity.bind(this);
    this.changeState = this.changeState.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  ///////////////////////////////////////////////////////
  saveRegister = (e) => {
    e.preventDefault();
    let user = {
      email: this.state.email,
      address: this.state.address,
      city: this.state.city,
      fname: this.state.fname,
      lname: this.state.lname,
      mobilenumber: this.state.mobilenumber,
      password: this.state.password,
      state: this.state.state,
      type: this.state.type,
      username: this.state.username,
    };

    console.log("user =>" + JSON.stringify(user));

    RegisterService.registerUser(user).then((res) => {
      this.props.history.push("/");
    });
  };
  ///////////////////////////////////////////////////////

  changeType = (event) => {
    this.setState({ type: event.target.value });
  };

  changeFname = (event) => {
    this.setState({ fname: event.target.value });
  };
  
  changeLname = (event) => {
    this.setState({ lname: event.target.value });
  };

  changeUserName = (event) => {
    this.setState({ username: event.target.value });
  };

  changeMobileNumber = (event) => {
    this.setState({ mobilenumber: event.target.value });
  };

  changeAddress = (event) => {
    this.setState({ address: event.target.value });
  };

  changeState = (event) => {
    this.setState({ state: event.target.value });
  };

  changeCity = (event) => {
    this.setState({ city: event.target.value });
  };

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  render() {
    return (
      <div>
        <HeaderControll />

      <div className="container">
        <h2 className=" text-center my-2 bg-dark py-2 text-light">Register</h2>
        <form className="border p-3 m-2 ">
          <div className="form-group">
            <label>Register as :</label>
            <select
              name="type"
              className="ml-3"
              value={this.state.type}
              onChange={this.changeType}
            >
              <option value="">-Select-</option>
              <option value="Buyer">Buyer</option>
              <option value="Seller">Seller</option>
            </select>
          </div>

          <div className="form-row">
            <label for="fname">First Name</label>
            <input
              type="text"
              name="fname"
              value={this.state.fname}
              onChange={this.changeFname}
              className="form-control shadow-none false"
            ></input>
          </div>

          <div className="form-row">
            <label for="lname">Last Name</label>
            <input
              name="lname"
              type="text"
              value={this.state.lname}
              onChange={this.changeLname}
              className="form-control shadow-none false"
            ></input>
          </div>

          <div className="form-row">
            <label for="username">Username</label>
            <input
              name="username"
              type="text"
              value={this.state.userName}
              onChange={this.changeUserName}
              className="form-control shadow-none false"
            ></input>
          </div>

          <div className="form-row">
            <label for="mobilenumber">Mobile Number</label>
            <input
              name="mobilenumber"
              type="number"
              value={this.state.mobile_number}
              onChange={this.changeMobileNumber}
              className="form-control shadow-none false"
            ></input>
          </div>

          <div className="form-row">
            <label for="address">Address</label>
            <input
              name="address"
              type="text"
              value={this.state.address}
              onChange={this.changeAddress}
              className="form-control shadow-none false"
            ></input>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="city">City</label>
              <input
                class="form-control shadow-none false"
                name="city"
                type="text"
                value={this.state.city}
                onChange={this.changeCity}
              />
            </div>

            <div className="form-group col-md-6">
              <label for="state">State</label>
              <input
                class="form-control shadow-none false"
                name="state"
                type="text"
                value={this.state.state}
                onChange={this.changeState}
              />
            </div>
          </div>

          <div className="form-row">
            <label for="email">Email</label>{" "}
            <input
              type="text"
              className="form-control shadow-none false"
              value={this.state.Email}
              onChange={this.changeEmail}
            ></input>
          </div>

          <div className="form-row">
            <label for="password">Password</label>{" "}
            <input
              name="password"
              type="text"
              value={this.state.password}
              onChange={this.changePassword}
              className="form-control shadow-none false"
            ></input>
          </div>

          <div className="form-row">
            <label for="confirmPassword">Confirm Password</label>{" "}
            <input
              name="confirmPassword"
              type="text"
              className="form-control shadow-none false"
            ></input>
          </div>

          <button
            className="btn btn-dark mt-3 mb-3 btn-lg"
            type="submit"
            onClick={this.saveRegister}
          >
            Register
          </button>

          <button
            className="btn btn-danger mt-3 ml-3 mb-3 btn-lg "
            type="reset"
          >
            Reset
          </button>
        </form>
      </div>
      </div>
    );
  }
}

export default RegForm;
