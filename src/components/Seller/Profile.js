import React from "react";
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="zAxisProfile">
      <div className="container my-5">
        <div className="row ">
          <div className="col-4 border">
            <div className="conatiner py-5">
              <h4>Overview</h4>
              <hr />
              <h5>ORDERS</h5>
              <h5 className="text-secondary pl-3 pt-2">
                {" "}
                <a href="">Order & returns</a>
              </h5>
              <hr />
              <h5>CREDITS</h5>
              <h5 className="text-secondary pl-3 pt-2">
                {" "}
                <a href="">Coupons</a>
              </h5>
              <h5 className="text-secondary pl-3 pt-2">
                {" "}
                <a href="">Coupons</a>
              </h5>
              <h5 className="text-secondary pl-3 pt-2">
                {" "}
                <a href="">Coupons</a>
              </h5>
              <hr />
              <h5>ORDERS</h5>
              <h5 className="text-secondary pl-3 pt-2">
                {" "}
                <a href="">Order & returns</a>
              </h5>
              <hr />
              <hr />
              <h5>CREDITS</h5>
              <h5 className="text-secondary pl-3 pt-2">
                {" "}
                <a href="">Coupons</a>
              </h5>
              <h5 className="text-secondary pl-3 pt-2">
                {" "}
                <a href="">Coupons</a>
              </h5>
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
                <input
                  type="text"
                  className="form-control"
                  id=""
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
              <div className="card-body">
                <a href="" className="btn btn-primary btn-lg">
                  Edit Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <div class="card text-center">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div class="card-footer text-muted">2 days ago</div>
        </div>
      </div>
      {/* <div className="container">
            <div className="row ">
                <div class="card bg-light mb-3 col-3 mx-4">
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title">Light card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card bg-light mb-3  col-3 mx-4">
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title">Light card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card bg-light mb-3  col-3 mx-4">
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title">Light card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div> 
            </div>
        </div> */}
    </div>
  );
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
