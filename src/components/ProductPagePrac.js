import React, { Component } from "react";
import { axios } from "axios";
import RegisterService from "./RegisterService/RegisterService";

export class ProductPagePrac extends Component {
  constructor() {
    super();

    this.state = { products: [], productid: "" };
    // this.addCart = this.addCart.bind(this);
  }

  addCart = (event) => {
    console.log(event.target.value);
    let id = event.target.value;
    let product = {
      productid: this.event.value,
    };

    RegisterService.addCart(product).then((res) => {
      this.props.history.push("/");
    });
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
                class="card"
                style={{ width: "350px", height: "400px", margin: "40px" }}
              >
                <img
                  class="card-img-top"
                  src="https://www.placecage.com/640/360"
                  alt="Card image cap"
                  style={{ width: "350px", height: "280px" }}
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <td>{productDetail.productid}</td>
                  <td>{productDetail.style}</td>
                  <td>{productDetail.artistname}</td>
                  <td>Rs: {productDetail.sellingprice}</td>
                  <form>
                    {" "}
                    <button
                      type="submit"
                      class="btn btn-primary"
                      value={productDetail.productid}
                      onClick={this.addCart}
                    >
                      Buy
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
