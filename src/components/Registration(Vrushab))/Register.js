import "./Register.css";
import { Formik, Form } from "formik";
import React, { Component } from "react";
import * as Yup from "yup";
import { Registration } from "./SubRegister";

export function BodyForm() {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("FirstName is Required"),
    lastName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("LastName is Required"),
    userName: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("LastName is Required"),
    mobileNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^([7-9]{1})([\d]{9})$/g, "Invalid phone number"),
    address: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Address is Required"),
    city: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("City is Required"),
    state: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("State is Required"),
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    password: Yup.string()
      .min(8, "Password is too short - should be 8 chars minimum")
      .required("Password is Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        userName: "",
        mobileNumber: "",
        address: "",
        city: "",
        state: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
    >
      <div className="container">
        <h2 className=" text-center my-2 bg-dark py-2 text-light">Register</h2>
        <Form className="border p-3 m-2 ">
          <div className="form-group">
            <label>Register as :</label>
            <select name="" id="" className="ml-3">
              <label htmlFor="" />
              <option value="user">Buyer</option>
              <option value="admin">Seller</option>
            </select>
          </div>
          <Registration label="First Name" name="firstName" type="text" />
          <Registration label="Last Name" name="lastName" type="text" />
          <Registration label="Username" name="userName" type="text" />
          <Registration
            label="Mobile Number"
            name="mobileNumber"
            type="number"
          />
          np
          <Registration label="Address" name="address" type="textbox" />
          <div class="form-row">
            <div class="form-group col-md-6">
              <Registration label="City" name="city" type="textbox" />
            </div>
            <div class="form-group col-md-6">
              <Registration label="State" name="state" type="textbox" />
            </div>
          </div>
          <Registration label="Email" name="email" type="email" />
          <Registration label="Password" name="password" type="password" />
          <Registration
            label="Confirm Password"
            name="confirmPassword"
            type="password"
          />
          <div className="form-check mb-4">
            <input
              type="checkbox"
              className="form-check-input largerCheckbox input-group-lg"
              name="checkBox"
              id="exampleCheck1"
              required
            />
            <label className="form-check-label ml-4" for="exampleCheck1">
              {" "}
              I agree to the terms & conditions
            </label>
          </div>
          <button className="btn btn-dark mt-3 mb-3 btn-lg" type="submit">
            Register
          </button>
          <button
            className="btn btn-danger mt-3 ml-3 mb-3 btn-lg "
            type="reset"
          >
            Reset
          </button>
        </Form>
      </div>
    </Formik>
  );
}

// --------------------------------------------

// use this code to import this file
// import { BodyForm } from "./Registration/App";
// <BodyForm />
