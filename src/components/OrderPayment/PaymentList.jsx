import React, { Component } from 'react'
import PaymentServices from '../Services/PaymentServices'

export default class PaymentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            payments:[] //we store rest api response in payment array
            //store data into payment array
        }
        this.addPayment= this.addPayment.bind(this);//use to call addPayment page
    }
    componentDidMount() {//call rest api
        //this method return promice
        PaymentServices.getPayment().then((res)=>{
            this.setState({payments:res.data});
        });
    }

    addPayment() {
        this.props.history.push('/addPayment');//this route  get call when we hitt buttom
        //HIstory Object contain all the history of roution
        //this history object are mentained by App ROuter
        //and this object are passed as props
        //History object manualy control browser history

    }

    render() {//
        return (
            <div className="container">
                <div className="bg-dark py-1 text-light my-4" >
                    <h2 className="text-center ">Payment List</h2>
                </div>
             
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Email Id</th>
                                <th>Produc Id</th>
                                <th>Card Holder Name</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.payments.map( //es6 feture
                                    payment => 
                                    <tr key={payment.bayerEmailId}>
                                        {/* display row dynamically */}
                                        <td>{payment.bayerEmailId}</td>
                                        <td>{payment.productId}</td>
                                        <td>{payment.cardHolder}</td>
                                        <td>{payment.amount}</td>
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
//create services folder in which axios is there