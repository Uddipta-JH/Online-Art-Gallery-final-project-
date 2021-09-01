import React, { Component } from 'react'
import PaymentServices from '../Services/PaymentServices'
import PaymentForm from './PaymentForm';

export default class Payment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            payment:[]
        }
        this.addPayment= this.addPayment.bind(this);
    }
    componentDidMount() {
        PaymentServices.getPayment().then((res)=>{
            this.setState({payment:res.data});
            console.log(res);
        });
    }

    addPayment() {
        this.props.history.push('/add-payment');
    }

    render() {
        return (
            <div className="container">
                <div className="bg-dark py-1 text-light my-4" >
                    <h2 className="text-center ">Payment List</h2>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>BankName</th>
                                <th>CardNumber</th>
                                <th>ExpiryDate</th>
                                <th>cvv</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.payment.map(
                                    payment => 
                                        <tr key={payment.paymentId}>
                                            <td>{payment.amount}</td>
                                            <td>{payment.bankName}</td>
                                            <td>{payment.cardNumber}</td>
                                            <td>{payment.expiryDate}</td>
                                            <td>{payment.cvv}</td>
                                        </tr>
                                )
                            }
                        </tbody>

                    </table>
                    <button class="btn btn-primary" onClick={this.addPayment}>Payment</button>
                    <a href="">addPayment</a>
                </div>
            </div>
        )
    }
}

// Download AXIOS library
// npm install axios --save