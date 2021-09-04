import React, { Component } from 'react'
import PaymentServices from '../../Services/PaymentServices';
import PaymentForm from './PaymentForm';
import axios from "axios";


export default class OrderHistory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            payment:[]
        }
    }
    componentDidMount(event) {
    
        let userid = {
            userid: localStorage.getItem("regid"),
          };

          console.log(JSON.stringify(userid));
        axios.post(`http://localhost:8081/payment/orderHistory`,userid).then((res)=>{
            this.setState({payment:res.data});
            console.log(res);
        });
    }

 

    render() {
        return (
            <div className="container">
                <div className="bg-dark py-1 text-light my-4" >
                    <h2 className="text-center ">Order List</h2>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Artist Name</th>
                                <th>Cost</th>
                                <th>Order Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.payment.map(
                                    payment => 
                                        <tr key={payment.orderId}>
                                            <td>{payment.productname}</td>
                                            <td>{payment.artistname}</td>
                                            <td>Rs{payment.sellingprice}</td>
                                            <td>{payment.orderStatus}</td>
                                        </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}

// Download AXIOS library
// npm install axios --save