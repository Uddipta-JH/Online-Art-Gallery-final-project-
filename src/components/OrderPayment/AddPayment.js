import React, { Component } from 'react'
import PaymentServices from '../Services/PaymentServices'

export default class AddPayment extends Component {
    constructor(props) {
        super(props)
        this.state = {//this all properties is use to get form data at the time of submition
            orderId:'',
            bayerEmailId:'',
            productId:'',
            cardHolder:'',
            bankName:'',
            amount:'',
            cardNumber:'',
            expiryDate:'',
            cvv:''
            
        }
        this.changeOrderIdHandler=this.changeOrderIdHandler.bind(this);
        this.changeBayerEmailIdHandler=this.changeBayerEmailIdHandler.bind(this);
        this.changeProductIdHandler=this.changeProductIdHandler.bind(this);
        this.changeCardHolderHandler=this.changeCardHolderHandler.bind(this);
        this.changeBankNameHandler=this.changeBankNameHandler.bind(this);
        this.changeAmountHandler=this.changeAmountHandler.bind(this);
        this.changeCardNumberHandler=this.changeCardNumberHandler.bind(this);
        this.changeExpiryDateHandler=this.changeExpiryDateHandler.bind(this);
        this.changeCvvHandler=this.changeCvvHandler.bind(this);

        this.addPayment=this.addPayment.bind(this);
    }

    changeOrderIdHandler=(event) => {
        this.setState({orderId: event.target.value});
    }
    changeBayerEmailIdHandler=(event) => {
        this.setState({bayerEmailId: event.target.value});
    }
    changeProductIdHandler=(event) => {
        this.setState({productId: event.target.value});
    }
    changeCardHolderHandler=(event) => {
        this.setState({cardHolder: event.target.value});
    }
    changeBankNameHandler=(event) => {
        this.setState({bankName: event.target.value});
    }
    changeAmountHandler=(event) => {
        this.setState({amount: event.target.value});
    }
    changeCardNumberHandler=(event) => {
        this.setState({cardNumber: event.target.value});
    }
    changeExpiryDateHandler=(event) => {
        this.setState({expiryDate: event.target.value});
    }
    changeCvvHandler=(event) => {
        this.setState({cvv: event.target.value});
    }
    
    addPayment=(e) => {
        e.preventDefault();
        let payment={
            orderId:this.state.orderId,
            bayerEmailId:this.state.bayerEmailId,
            productId:this.state.productId,
            cardHolder:this.state.cardHolder,
            bankName:this.state.bankName,
            amount:this.state.amount,
            cardNumber:this.state.cardNumber,
            expiryDate:this.state.expiryDate,
            cvv:this.state.cvv
        }
        console.log('payment =>'+JSON.stringify(payment));
    
        PaymentServices.addPayment(payment).then(res => {
            this.props.history.push("/paymentHistory");
        });
    }

    cancel(){
        this.props.history.push('/paymentHistory');
    }


    render() {
        return (
            <div>
                <div className="container">
                    <h2 className=" text-center my-2 bg-dark py-2 text-light">Payment form</h2> 
                    <form action="" method="post" className="p-4" >
                    <div className="form-group ">
                        <label >Order Id</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        name="orderId"
                        placeholder="Order Id"
                        value={this.state.orderId}
                        onChange={this.changeOrderIdHandler} 
                        />
                        <span id="FullNamePara" ></span>
                    </div>
                    <div className="form-group ">
                        <label >Bayer EmailId</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        name="bayerEmailId" 
                        placeholder="Bayer Email Id"
                        value={this.state.bayerEmailId}
                        onChange={this.changeBayerEmailIdHandler} 
                        />
                        <span id="FullNamePara" ></span>
                    </div>
                    <div className="form-group ">
                        <label >Product Id</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        name="productId" 
                        placeholder="Product Id"
                        value={this.state.productId}
                        onChange={this.changeProductIdHandler} 
                        />
                        <span id="FullNamePara" ></span>
                    </div>
                    <div className="form-group ">
                        <label >Card Holder</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        name="cardHolder" 
                        placeholder="Enter Card Holder Name"
                        value={this.state.cardHolder}
                        onChange={this.changeCardHolderHandler} 
                        />
                        <span id="FullNamePara" ></span>
                    </div>
                    
                    
                    <div className="form-group ">
                        <label >Bank Name</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        name="bankName" 
                        placeholder="Enter Bank Name"
                        value={this.state.bankName}
                        onChange={this.changeBankNameHandler} 
                        />
                        <span id="FullNamePara" ></span>
                    </div>
                    <div className="form-group ">
                        <label >Amount</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        name="amount" 
                        placeholder="Amount ( &#8377; )"
                        value={this.state.amount}
                        onChange={this.changeAmountHandler} 
                        />
                        <span id="FullNamePara" ></span>
                    </div>
                    
                    <div className="form-group ">
                        <label >Card number</label>
                        <input type="number" 
                        className="form-control" 
                        name="cardNumber" 
                        placeholder="Enter Card Number"
                        value={this.state.cardNumber}
                        onChange={this.changeCardNumberHandler} 
                        />
                        <span id="FullNamePara" ></span>
                    </div>
                    <div className="row">
                    <div className="form-group col-6 ">
                        <label >Expiry date</label>
                        <input 
                        type="number" 
                        className="form-control" 
                        name="expiryDate" 
                        placeholder="00 - 00"
                        value={this.state.expiryDate}
                        onChange={this.changeExpiryDateHandler} 
                        />
                        <span id="FullNamePara" ></span>
                    </div>
                    
                    <div className="form-group col-6">
                        <label >CCV</label>
                        <input 
                        type="number" 
                        className="form-control" 
                        name="cvv" 
                        placeholder="000"
                        value={this.state.cvv}
                        onChange={this.changeCvvHandler} 
                        />
                        <span id="FullNamePara" ></span>
                    </div>
                    </div>
                        <button type="button" class="btn btn-dark mr-3" onClick={this.addPayment}>Submit</button>
                        <button type="reset" class="btn btn-danger " onClick={this.cancel.bind(this)}>Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}
