import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

export default class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "",
      amount: "",
      bankName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    };
  }

  changebankNameHandler = (event) => {
    this.setState({ bankName: event.target.value });
  };

  changecardNumberHandler = (event) => {
    this.setState({ cardNumber: event.target.value });
  };

  changeexpiryDateHandler = (event) => {
    this.setState({ expiryDate: event.target.value });
  };

  changeccvHandler = (event) => {
    this.setState({ cvv: event.target.value });
  };

  placeOrder = (e) => {
    e.preventDefault();
    let confirmPayment = {
      userid: localStorage.getItem("regid"),
      amount: localStorage.getItem("total"),
      bankName: this.state.bankName,
      cardNumber: this.state.cardNumber,
      expiryDate: this.state.expiryDate,
      cvv: this.state.cvv,
    };

    axios
      .post(`http://localhost:8081/payment/pay`, confirmPayment)
      .then((response) => {
        if (response.data != null)
          swal("Successfully!!", "Order placed successfully");
        localStorage.removeItem("total");
        this.directAfterPayment();
      });
  };

  directAfterPayment() {
    this.props.history.push("/productPage");
  }
  render() {
    return (
      <div>
        <div className="container col-4">
          <h2 className=" text-center my-2 bg-dark py-2 text-light">
            Payment form
          </h2>
          <form action="" method="post" className="p-4">
            <div className="form-group">
              <label>Amount: Rs</label>
              <input
                type="number"
                name="amount"
                value={localStorage.getItem("total")}
              />
            </div>
            <div className="form-group ">
              <label>Bank Name</label>
              <input
                type="text"
                className="form-control"
                name="bankName"
                value={this.state.bankName}
                onChange={this.changebankNameHandler}
                placeholder="Enter Bank Name"
              />
              <span id="FullNamePara"></span>
            </div>

            <div className="form-group ">
              <label>Card number</label>
              <input
                type="number"
                className="form-control"
                name="cardNumber"
                value={this.state.cardNumber}
                onChange={this.changecardNumberHandler}
                placeholder="Enter Card Number"
              />
              <span id="FullNamePara"></span>
            </div>
            <div className="row">
              <div className="form-group col-6 ">
                <label>Expiry date</label>
                <input
                  type="number"
                  className="form-control"
                  name="expiryDate"
                  value={this.state.expiryDate}
                  onChange={this.changeexpiryDateHandler}
                  placeholder="00 / 00"
                />
                <span id="FullNamePara"></span>
              </div>

              <div className="form-group col-6">
                <label>CCV</label>
                <input
                  type="number"
                  className="form-control"
                  name="ccv"
                  value={this.state.ccv}
                  onChange={this.changeccvHandler}
                  placeholder="000"
                />
                <span id="FullNamePara"></span>
              </div>
            </div>

            <br />
            <button
              type="button"
              onClick={this.placeOrder}
              className="btn btn-dark "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
