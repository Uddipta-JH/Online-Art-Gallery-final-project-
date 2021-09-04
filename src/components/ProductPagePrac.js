import React, { Component } from "react";
import RegisterService from "./RegisterService/RegisterService";
import swal from "sweetalert";

export class ProductPagePrac extends Component {
  constructor() {
    super();

    this.state = { products: [], productid: "" };
    // this.addCart = this.addCart.bind(this);
  }

  addCart = (event) => {
    let id = event.target.value;
    let product = {
      productid: id,
      userid: localStorage.getItem("regid"),
    };
    console.log(JSON.stringify(product));
    console.log(id);
    console.log();

    if (localStorage.getItem("loginSession") != null) {
      RegisterService.addCart(product).then((response) => {
        console.log(response);
        if (response.data == null) {
          swal("!Auction Painting!");
        }
      });
    } else {
      swal("Error!", "User not logged in!");
    }
  };

  ////////////////////////////////////////////////////////////////
  componentDidMount() {
    RegisterService.getInformation().then((res) => {
      this.setState({ products: res.data });
      console.log(res);
    });
  }
  ////////////////////////////////////////////////////////////////

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {this.state.products.map((productDetail) => (
            <div key={productDetail.productid}>
              <div
                class="card my-5"
                style={{ width: "350px", height: "480px" }}
              >
                <img
                  class="card-img-top"
                  src="https://www.placecage.com/640/360"
                  alt="Card image cap"
                  style={{ width: "350px", height: "320px" }}
                />
                <div class="card-body">
                  <h5 class="card-title">{productDetail.style}</h5>
                  <td> {productDetail.artistname}</td>
                  <tr> Rs: {productDetail.sellingprice}</tr>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    value={productDetail.productid}
                    onClick={this.addCart}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
