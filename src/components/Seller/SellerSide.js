import { Home } from "../HomeAfterLogin/HomeAfterLogin/Home";
import { Footer } from "./Footer";
import { Profile } from "./Profile";
import { SellerNavbar } from "./SellerNavbar";

export function SellerSide() {
  return (
    <div>
      <SellerNavbar />
      <Home />
      <Footer />
    </div>
  );
}
