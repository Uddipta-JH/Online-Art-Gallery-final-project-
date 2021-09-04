import axios from "axios";
import React, { Component, useCallback } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export class Basket extends Component {
  constructor() {
    super();
    this.state = { products: [], productid: "" };

    this.payment = this.payment.bind(this);
  }

  RemoveProduct = (event) => {
    let id = event.target.value;
    console.log(id);
    let product = {
      orderProductNo: id,
    };
    axios
      .post(`http://localhost:8081/addTo/RemoveFromCart`, product)
      .then((response) => {
        swal("Succefully!", "Product Removed");
      });
  };

  payment = (event) => {
    let user = {
      userid: localStorage.getItem("regid"),
    };

    axios.post(`http://localhost:8081/addTo/Sum`, user).then((res) => {
      if (res.data == null) localStorage.setItem("total", 0);
      else localStorage.setItem("total", res.data);
      this.pay(user);
    });
    console.log(localStorage.getItem("total"));
  };

  pay = (event) => {
    axios.post(`http://localhost:8081/addTo/OrderTable`, event);
    this.props.history.push("/pay");
  };

  componentDidMount() {
    let userid = {
      userid: localStorage.getItem("regid"),
    };
    console.log(userid);
    axios.post(`http://localhost:8081/addTo/viewCart`, userid).then((res) => {
      this.setState({ products: res.data });
      localStorage.setItem("product", JSON.stringify(res.data));
      console.log(res);
    });
  }

  render() {
    return (
      <div className="conatiner-fluid">
        <div className=" container border bg-dark text-white">
          <h1>Cart</h1>
          <h1></h1>
        </div>
        //////////////////////////////////////////////////////////////
        {this.state.products.map((productDetail) => (
          <div key={productDetail.productid}>
            <div className="container border">
              <div className="row">
                <div className="col-10">
                  <div className="row">
                    <div className="col-2 my-2">
                      <div className="border border-dark">
                        <img
                          src="https://images.unsplash.com/photo-1612396931345-bb01d8657af3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                          class="w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <h5 className="text-muted mt-3">
                        {productDetail.productname}
                      </h5>
                      <p>Rs: {productDetail.sellingprice}</p>
                    </div>
                  </div>
                </div>

                <form style={{ margin: "auto" }}>
                  <div className="col-2">
                    <button
                      value={productDetail.orderProductNo}
                      onClick={this.RemoveProduct}
                      className="btn btn-primary ml-3"
                    >
                      Remove
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ))}
        <br />
        <div
          className=" my-auto text-center"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button
            className="btn btn-primary text-center"
            onClick={this.payment}
          >
            Buy
          </button>
        </div>
        ///////////////////////////////////////////////////////////////
      </div>
    );
  }
}
