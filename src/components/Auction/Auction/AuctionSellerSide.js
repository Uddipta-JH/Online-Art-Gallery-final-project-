import React from "react";

export const AuctionSellerSide = () => {
  return (
    <div className="container mb-5 mt-5 border border-dark">
      <div className="bg-dark m-4">
        <h2 className="p-2 text-light text-center">
          Auction (<span className="text-danger"> 11:12 </span>){" "}
        </h2>
      </div>
      <div class="row g-0 bg-light position-relative ">
        <div class="col-md-6 mb-md-0 p-md-4">
          <div className="border border-dark">
            <img
              src="https://images.unsplash.com/photo-1612396931345-bb01d8657af3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              class="w-100"
              alt="..."
            />
          </div>
          <div className="p-5 mt-4 bg-secondary">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="..." alt="First slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="..." alt="Second slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="..." alt="Third slide" />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 p-4 ps-md-0 border-left">
          <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div class="col">
              <div class="p-3 border bg-light">
                <h2>Depth of Point</h2>
                <h5>Painting by Rishab Chaudhari</h5>
              </div>
            </div>
          </div>
          <hr />
          <div className="border-bottom">
            <b>Dimensions : </b>77 cm x 53 cm
            <br />
            <b>Location : </b>Ngp (since 2021)
            <br />
            <b>Created : </b>1503
            <br />
            <b>Medium : </b>Oil Paint
          </div>
          <div className="border-bottom m-3 py-4">
            <i>
              <b className="text-danger">Auction End : </b>
              11/05/19 12:00 pm
            </i>
          </div>

          <div class="card text-white text-dark mb-3">
            <div class="card-header">
              <b>Starting Bid : </b>
              120000
            </div>
            <div class="card-header">
              <b>Current Bid : </b>
              132000
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <table class="table">
          <thead class="table-dark">
            <tr>
              <th scope="col">User Id</th>
              <th scope="col">User Name</th>
              <th scope="col">Bid</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">98765</th>
              <td>Uddipta</td>
              <td>132000</td>
              <td>11:48 am</td>
            </tr>
            <tr>
              <th scope="row">23456</th>
              <td>Payal</td>
              <td>130000</td>
              <td>11:44 am</td>
            </tr>
            <tr>
              <th scope="row">76543</th>
              <td>Suraj</td>
              <td>129000</td>
              <td>11:40 am</td>
            </tr>
            <tr>
              <th scope="row">54523</th>
              <td>Rohan</td>
              <td>123000</td>
              <td>11:35 am</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
