import axios from "axios";

const URL_registers = "http://localhost:8081/api/v1/user";
const URL_GetProducts = "http://localhost:8081/api/v1/artList";
const URL_AddtoCart = "http://localhost:8081/addTo/cart";

class RegisterService {
  getInformation() {
    return axios.get(URL_GetProducts);
  }

  registerUser(user) {
    return axios.post(URL_registers, user);
  }

  addCart(product) {
    return axios.post(URL_AddtoCart, product);
  }
}

export default new RegisterService();
