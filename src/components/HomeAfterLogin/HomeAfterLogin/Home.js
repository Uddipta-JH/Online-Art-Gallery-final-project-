import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="black text-white">
        <marquee behavior="scroll" direction="left" scrollamount="20">
          <b>
            * Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            ducimus excepturi cupiditate qui ea quo exercitationem cum fugit
            magni, aliquam ex dolor eligendi, earum sapiente voluptate!
            Officiis, dicta. Maxime, aut.
          </b>
        </marquee>
      </div>
      <div className="container my-5 pl-3 py-3 black text-dark">
        <div id="demo" class="carousel slide" data-ride="carousel">
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1551732998-9573f695fdbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="Los Angeles"
                width="1100"
                height="500"
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
                width="1100"
                height="500"
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
                width="1100"
                height="500"
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
      <div className="my-5 mx-5">
        <div class="row row-cols-1 row-cols-md-3 g-4 flex">
          <div class="col">
            <div class="card h-100">
              <img
                src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
