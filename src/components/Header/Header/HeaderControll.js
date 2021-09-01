import { BuyerNavbar } from "./BuyerNavbar";
import { BeforeLoginNavbar } from "./BeforeLoginNavbar";
import { SellerNavbar } from "../../Seller/SellerNavbar";

export function HeaderControll() {
  return (
    <div>
      {localStorage.getItem("loginSession") &&
        JSON.parse(localStorage.getItem("loginSession")).type == "Buyer" && (
          <BuyerNavbar />
        )}

      {localStorage.getItem("loginSession") &&
        JSON.parse(localStorage.getItem("loginSession")).type == "Seller" && (
          <SellerNavbar />
        )}
      {localStorage.getItem("loginSession") == null && <BeforeLoginNavbar />}
    </div>
  );
}
