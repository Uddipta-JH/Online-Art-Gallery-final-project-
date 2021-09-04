import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

export function Login() {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    if (user.email === "" || user.password == "") {
      swal("Error", "Please fill every detail", "error");
    } else {
      postDatatoServer(user);
      e.preventDefault();
    }
  };

  const postDatatoServer = useCallback((data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    axios
      .post(`http://localhost:8081/login/loginUser`, data)
      .then((response) => {
        if (response.data == "") {
          swal("Error!", "User Not Present");
        } else {
          localStorage.setItem("loginSession", JSON.stringify(response.data));
          // swal("Success!", "Logged in");
          let a = localStorage.getItem("loginSession");
          let b = JSON.parse(a);
          let regid = b.regid;
          let name = b.fname;
          let lastname = b.lname;
          let mobile = b.mobilenumber;
          let emailid = b.email;
          let add = b.address;
          let type = b.type;
          localStorage.setItem("type", type);
          localStorage.setItem("regid", regid);
          localStorage.setItem("name", name);
          localStorage.setItem("lname", lastname);
          localStorage.setItem("mobilenumber", mobile);
          localStorage.setItem("email", emailid);
          localStorage.setItem("address", add);
          redirect(response.data.type);
        }
      });

    const redirect = (response) => {
      history.push("/", JSON.stringify(response));
    };
  });
  return (
    <div>
      {/* <HeaderControll /> */}
      <div className="container">
        <h2 className="bg-dark text-center text-light m-4 p-3">Login</h2>
        <div className="border m-3">
          <form className="m-5 " onSubmit={handleLogin}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                name="email"
                value={user.email}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                name="password"
                value={user.password}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
