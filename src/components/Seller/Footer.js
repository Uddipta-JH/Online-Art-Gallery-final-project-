import "./home.css";
import "./finalsupport.css";

export function Footer() {
  return (
    <div className="footerdesign">
      <div className="part3">
        <div className="footerpart1">
          <h3>About Us</h3>
          <a href="ComingSoon.html">About Us</a>
          <br />
          <a href="ComingSoon.html">How It Works</a>
          <br />
          <a href="ComingSoon.html">Team</a>
        </div>
        <div className="footerpart2">
          <h3>Press</h3>
          <a href="ComingSoon.html">Latest News</a>
          <br />
          <a href="ComingSoon.html">Events</a>
          <br />
          <a href="ComingSoon.html">Awards</a>
        </div>
        <div className="footerpart3">
          <h3>Get In Touch</h3>
          <a href="ComingSoon.html">Blogs</a>
          <br />
          <a href="ComingSoon.html">Causes</a>
          <br />
          <a href="ComingSoon.html"></a>
        </div>
      </div>
      <br />
      <div>
        <hr />
        <br />
        <p class="my-1">
          Copy Right @2021. All Rights Reserved By{" "}
          {/* <spam style={{ color: "red" }}> */}
          <a href="#">Art Gallery</a>
          {/* </spam> */}
        </p>
        <p style={{ margin: 0 }}></p>
        <br />
      </div>
      {/* <!-- footer ends --> */}
      {/* <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) --> */}
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}
