import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="black text-white">
        <marquee behavior="scroll" direction="left" scrollamount="15">
          <a href="" className="text-light">
            *
          </a>
          <a href="" className="text-light">
            *
          </a>
        </marquee>
      </div>
      <div className="container-md-fluid "></div>
      <div className="text-center black text-dark">
        <div id="demo" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1551732998-9573f695fdbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="Los Angeles"
                width="1700"
                height="700"
              />
              <div class="carousel-caption black">
                <h3>Los Angeles</h3>
                <p>We had such a great time in LA!</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1520420097861-e4959843b682?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Chicago"
                width="1700"
                height="700"
              />
              <div class="carousel-caption black">
                <h3>Chicago</h3>
                <p>Thank you, Chicago!</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1582400145495-214216c4e607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt="New York"
                width="1700"
                height="700"
              />
              <div class="carousel-caption black">
                <h3>New York</h3>
                <p>We love the Big Apple!</p>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </>
  );
};
