// import { HeadPart } from "./components/Header/Header/Head";
import { Footer } from "./components/webpage/Footer";
import { NavBar } from "./components/webpage/NavBar";
import Blog from "./components/Blog/Blog";
import RegForm from "./components/Registeration/RegForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PaymentPage from "./components/PaymentForm/PaymentPage";
import { Login } from "./components/Login/Login";
// import { LoginHeader } from "./components/Header/Header/LoginHeaderBuyer";
import { Profile } from "./components/Profile/Profile/Profile";
import { HeaderControll } from "./components/Header/Header/HeaderControll";
import UploadArt from "./components/SellerUpload/UploadArt";
import { Home } from "./components/HomeAfterLogin/HomeAfterLogin/Home";
import { WebSiteMainPage } from "./WebSiteMainPage/WebSiteMainPage";
import { AuctionSellerSide } from "./components/Auction/Auction/AuctionSellerSide";
import Upload from "./components/SellerUpload/UploadPic";
import SimpleReactFileUpload from "./components/SellerUpload/UploadPic";
import { ProductPagePrac } from "./components/ProductPagePrac";
import { Basket } from "./components/basket/components/Basket";
export function App() {
  return (
    <div>
      <Router>
        <div>
          <HeaderControll />
          {/* <LoginHeader /> */}
          {/* <NavBar /> */}
          {/* <Blog /> */}
          <Switch>
            {/* <Route path="/" exact component={WebSiteMainPage}></Route> */}
            {/* <Route path="/" exact component={Home} /> */}
            <Route path="/Upload" component={Upload} />

            {/* {localStorage.getItem("loginSession") !== null && (
              <Route path="/Seller" exact component={SellerSide}></Route>
            )} */}
            <Route
              path="/productPage"
              exact
              component={ProductPagePrac}
            ></Route>
            <Route path="/basket" component={Basket} />
            <Route path="/Register" exact component={RegForm}></Route>
            <Route path="/blog" component={Blog}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/Payment" component={PaymentPage}></Route>
            <Route path="/UploadArt" component={UploadArt}></Route>
            <Route path="/AuctionSeller" component={AuctionSellerSide}></Route>
            {/* <Route path="/Auction" component={ac}></Route> */}
            {localStorage.getItem("type") != null && (
              <Route path="/Profile" component={Profile}></Route>
            )}
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}
