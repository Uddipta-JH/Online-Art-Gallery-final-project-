import React from "react";
import "./Profile.css";
import { Home } from "../../3.9.21/HomeAfterLogin/Home";

export const ProfileSeller = () => {
  if (localStorage.getItem("type") != null) {
    return (
      <div className="zAxisProfile">
        <div className="container my-5">
          <div className="row ">
            <div className="col-4 border">
              <div className="conatiner py-5">
                <h4></h4>
                <hr />
                <h5 className="text-secondary pl-3 pt-2">
                  Welcome {localStorage.getItem("name")}
                </h5>
                <hr />
                <h5>ART</h5>
                <h5 className="text-secondary pl-3 pt-2">
                  <a href="UploadArt">Upload Art</a>
                </h5>
                <h5 className="text-secondary pl-3 pt-2">
                  <a href="orderRequest">Order Request</a>
                </h5>
                <h5 className="text-secondary pl-3 pt-2">
                  <a class="" href="/AuctionSeller">
                    Auction
                  </a>
                </h5>
                <hr />
                {/* <hr />
              <h5>CREDITS</h5>
              <h5 className="text-secondary pl-3 pt-2">
                {" "}
                <a href="">Coupons</a>
              </h5>
              <h5 className="text-secondary pl-3 pt-2">
                {" "}
                <a href="">Coupons</a>
              </h5> */}
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
