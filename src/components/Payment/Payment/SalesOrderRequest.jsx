import React, { Component } from 'react'
import PaymentServices from '../../Services/PaymentServices';
import PaymentForm from './PaymentForm';
import axios from "axios";


export default class SalesOrderRequest extends Component {
    constructor(props) {
        super(props)

        this.state = {
            payment:[]
        }
    }
    componentDidMount(event) {
    
        let userid = {
            regid: localStorage.getItem("regid"),
          };

          console.log(userid);
        axios.post(`http://localhost:8081/orderRequest/sales`,userid).then((res)=>{
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
                                <th>Price</th>
                                <th>First Name</th>
                                <th>Second Name</th>
                                <th>Mobile Number</th>
                                <th>Email ID</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.payment.map(
                                    payment => 
                                        <tr key={payment.orderId}>
                                            <td>{payment.productname}</td>
                                            <td>Rs {payment.sellingprice}</td>
                                            <td>{payment.fname}</td>
                                            <td>{payment.lname}</td>
                                            <td>{payment.mobilenumber}</td>
                                            <td>{payment.email}</td>
                                            <td>{payment.address}</td>

                                            <td><button
                    //   value={}
                    //   onClick={this.RemoveProduct}
                      className="btn btn-primary ml-3"
                    >
                      Remove
                    </button></td>
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