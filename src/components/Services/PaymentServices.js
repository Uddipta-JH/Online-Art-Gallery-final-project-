import axios from "axios";

const PAYMENT_API_BASE_URL = 'http://localhost:8081/api/v1/payments';

class PaymentServices{
    getPayment(){
        return axios.get(PAYMENT_API_BASE_URL);
    }

    addPayment(payment){
        return axios.post(PAYMENT_API_BASE_URL,payment)
    }
}

export default new PaymentServices()