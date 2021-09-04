function PaymentPage() {
  return (
    <div>
      <div className="container col-4">
        <h2 className=" text-center my-2 bg-dark py-2 text-light">
          Payment form
        </h2>
        <form action="" method="post" className="p-4">
          <div className="form-group ">
            <label>Bank Name</label>
            <input
              type="text"
              className="form-control"
              id="Card holder"
              placeholder="Enter Bank Name"
            />
            <span id="FullNamePara"></span>
          </div>

          <div className="form-group ">
            <label>Card number</label>
            <input
              type="number"
              className="form-control"
              id="Card number"
              placeholder="Enter Card Number"
            />
            <span id="FullNamePara"></span>
          </div>
          <div className="row">
            <div className="form-group col-1 ">
              <label>Expiry date</label>
              <input
                type="number"
                className="form-control"
                id="Expiry date "
                placeholder="00"
              />
              <span id="FullNamePara"></span>
            </div>

            <div className="form-group col-2" style={{ paddingTop: "30px" }}>
              <input
                type="number"
                className="form-control"
                id="Expiry date "
                placeholder="00"
              />
              <span id="FullNamePara"></span>
            </div>

            <div className="form-group col-6">
              <label>CCV</label>
              <input
                type="number"
                className="form-control"
                id="CCV NUMBER"
                placeholder="000"
              />
              <span id="FullNamePara"></span>
            </div>
          </div>

          <br />
          <button type="button" class="btn btn-dark ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PaymentPage;
