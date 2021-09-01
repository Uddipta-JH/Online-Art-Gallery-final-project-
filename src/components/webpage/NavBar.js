import "./home.css";
import "./finalsupport.css";

export function NavBar() {
  return (
    <div className="nav-bar sticky zAxisProfile">
      <div className="nav-part11a">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10">
              <ul>
                <li>
                  Gallery
                  <div className="mega-menu">
                    <div className="inner-mega-menu">
                      <p>
                        <a href="login">Login</a>
                      </p>
                      <p>mega-menu</p>
                      <p>mega-menu</p>
                      <p>mega-menu</p>
                    </div>
                  </div>
                </li>
                <li>
                  Style
                  <div className="mega-menu">
                    <div className="inner-mega-menu">
                      <p>mega-menu</p>
                      <p>mega-menu</p>
                      <p>mega-menu</p>
                      <p>mega-menu</p>
                    </div>
                  </div>
                </li>
                <li>
                  Auction
                  <div className="mega-menu">
                    <div className="inner-mega-menu">
                      <p>mega-menu</p>
                      <p>mega-menu</p>
                      <p>mega-menu</p>
                      <p>mega-menu</p>
                    </div>
                  </div>
                </li>
                <li>
                  Blogs
                  <div className="mega-menu">
                    <div className="inner-mega-menu">
                      <p>mega-menu</p>
                      <p>mega-menu</p>
                      <p>mega-menu</p>
                      <p>mega-menu</p>
                    </div>
                  </div>
                </li>
                <li>
                  Offers
                  <div className="mega-menu">
                    <div className="inner-mega-menu">
                      <p>mega-menu</p>
                      <p>mega-menu</p>
                      <p>mega-menu</p>
                      <p>mega-menu</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-part11b">
        <div className="col-2 pl-5">
          <ul>
            <li>
              <span>
                <i className="fas fa-cart-plus fa-2x"> </i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
