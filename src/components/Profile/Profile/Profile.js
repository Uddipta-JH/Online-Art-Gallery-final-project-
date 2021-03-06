import React from "react";
import { Home } from "../../3.9.21/HomeAfterLogin/Home";
import "./Profile.css";

export const Profile = () => {
  if (localStorage.getItem("type") != null) {
    return (
      <div className="zAxisProfile">
        <div className="container my-5">
          <div className="row ">
            <div className="col-4 border">
              <div className="conatiner py-5">
                <h4></h4>
                <h3 className="text-secondary pl-3 pt-2">
                  <b>
                    {" "}
                    <u> Welcome {localStorage.getItem("name")} </u>
                  </b>
                </h3>{" "}
                <hr />
                <h5>ORDERS</h5>
                <h5 className="text-secondary pl-3 pt-2">
                  <a href="basket">Cart</a>
                </h5>
                <h5 className="text-secondary pl-3 pt-2">
                  {" "}
                  <a href="orderHistory">Order history</a>
                </h5>
                <hr />
              </div>
            </div>
            <div className="col-8">
              <div className="card">
                <div className="container img ">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Profile</h5>
                  <h6>
                    {" "}
                    <b>Name:</b>
                    <i>
                      {localStorage.getItem("name")}{" "}
                      {localStorage.getItem("lname")}
                    </i>
                  </h6>
                  <h6>
                    {" "}
                    <b>Mobile: </b>
                    <i>{localStorage.getItem("mobilenumber")} </i>
                  </h6>
                  <h6>
                    {" "}
                    <b>EMail Id: </b>
                    <i>{localStorage.getItem("email")} </i>
                  </h6>
                  <h6>
                    {" "}
                    <b>Address: </b>
                    <i>{localStorage.getItem("address")} </i>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Home />
      </div>
    );
  }
};

{
  /* <div class="col mb-5">
                        <div class="card h-100">
                            <div class="badge bg-dark text-white position-absolute" >Sale</div>
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">Special Item</h5>
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    <span class="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                        </div>
            </div> */
}
