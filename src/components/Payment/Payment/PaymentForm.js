import React, { Component } from 'react'

export default class PaymentForm extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            amount:'',
            bankName:'',
            cardNumber:'',
            expiryDate:'',
            cvv:''
        }
    }
    
    changeAmountHandler=(event) => {
        this.setState({amount: event.target.value});
    }

    render() {
        return (
            <div>
      <div className="container col-4">
        <h2 className=" text-center my-2 bg-dark py-2 text-light">Payment form</h2> 
        <form action="" method="post" className="p-4" >
          <div className="form-group">
            <label >Amount</label>
            <input type="number" name="amount" value="{this.state.amount}" onChange={this.changeAmountHandler} id="" />
          </div>
          <div className="form-group ">
            <label >Bank Name</label>
            <input type="text" className="form-control" name="bankName" value="{this.state.bankName}" id="Card holder" placeholder="Enter Bank Name"/>
            <span id="FullNamePara" ></span>
          </div>
          
          <div className="form-group ">
            <label >Card number</label>
            <input type="number" className="form-control" name="cardNumber" value="this.state.cardNumber" id="Card number" placeholder="Enter Card Number"/>
            <span id="FullNamePara" ></span>
          </div>
         <div className="row">
          <div className="form-group col-6 ">
            <label >Expiry date</label>
            <input type="number" className="form-control" name="expiryDate" value="this.state.expiryDate" id="Expiry date " placeholder="00 / 00"/>
            <span id="FullNamePara" ></span>
          </div>
          
          <div className="form-group col-6">
            <label >CCV</label>
            <input type="number" className="form-control" name="ccv" value="this.state.ccv" id="CCV NUMBER" placeholder="000"/>
            <span id="FullNamePara" ></span>
          </div>
          </div>

        <br/>
         <button type="button" class="btn btn-dark ">Submit</button>

        </form>
      </div>
    </div>
        )
    }
}
