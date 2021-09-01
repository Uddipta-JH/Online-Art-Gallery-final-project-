import "./App.css";
import "./home.css";
import "./finalsupport.css";

export function BodyForm() {
  return (
    <div>
      <div className="registerbox">
        <div className="registerform">
          <div className="registerhead">
            <h3>Registration Form</h3>
          </div>
          <div className="ro">
            <div className="col">
              <label for="name">
                Name
                <p id="errname"></p>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter Name"
                onfocusout="validationname()"
              />
            </div>
            <div className="col">
              <label for="email">
                Email id
                <p id="errid"></p>
              </label>
              <input
                type="text"
                className="form-control"
                id="eid"
                name="eid"
                placeholder="Email Id if Any"
                onfocusout="validationeid()"
              />
            </div>
          </div>
          <div className="ro">
            <div className="col">
              <label for="pword">
                Password
                <p id="errpassword"></p>
              </label>
              <input
                type="password"
                className="form-control"
                id="pword"
                name="password"
                placeholder="Minimum Length 6"
                onfocusout="validationpassword()"
              />
            </div>
            <div className="col">
              <label for="no">
                Mobile no.
                <p id="errno"></p>
              </label>
              <input
                type="text"
                className="form-control"
                id="no"
                name="no"
                placeholder="Mobile number"
                onfocusout="validationmnum()"
              />
            </div>
          </div>
          <div className="ro">
            <div className="col">
              <label for="type">
                Type
                <p id="errtype"></p>
              </label>
              <select
                type="type"
                className="form-control"
                id="type"
                name="type"
              >
                <option value="">--Select One--</option>
                <option value="Doner">Doner</option>
                <option value="Recipient">Recipient</option>
              </select>
            </div>
            <div className="col">
              <label for="bgroup">
                Blood group
                <p id="errbgroup"></p>
              </label>
              <select
                type="type"
                className="form-control"
                id="bgroup"
                name="bloodgroup"
              >
                <option value="">--Dont know--</option>
                <option value="A-">A-</option>
                <option value="A+">A+</option>
                <option value="AB-">A-</option>
                <option value="AB+">A+</option>
                <option value="B-">A-</option>
                <option value="B+">A+</option>
                <option value="O-">A-</option>
                <option value="O+">A+</option>
              </select>
            </div>
          </div>
          <div className="ro">
            <div className="col">
              <label for="bdate">
                Birth Date
                <p id="errbdate"></p>
              </label>
              <input
                type="date"
                className="form-control"
                id="bdate"
                name="birth date"
                onfocusout="eligibility()"
              />
            </div>
            <div className="col">
              <label for="lastddate">Last Donation Date(Optional)</label>
              <p id="errddate"></p>
              <input
                type="date"
                className="form-control"
                id="lastddate"
                name="birth date"
                onfocusout="eligibility()"
              />
            </div>
          </div>
          <div className="ro">
            <div className="col">
              <label for="gen">
                Gender
                <p id="errgen"></p>
              </label>
              <select
                type="type"
                className="form-control"
                id="gen"
                name="gender"
              >
                <option value="">--Select One--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="col">
              <label for="weight">
                Weight
                <p id="errweight"></p>
              </label>
              <input
                type="text"
                className="form-control"
                id="weight"
                name="weight"
                placeholder="In Kgs"
                onfocusout="eligibility()"
              />
            </div>
          </div>
          <div className="ro">
            <div className="col">
              <label for="location">
                Location
                <p id="errlocation"></p>
              </label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                onfocusout="validationlocation()"
              />
            </div>
            <div className="col">
              <label for="city">
                City
                <p id="errcity"></p>
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                onfocusout="validationcity()"
              />
            </div>
          </div>
          <div className="ro">
            <div className="col">
              <label for="pincode">
                Pincode
                <p id="errpin"></p>
              </label>
              <input
                type="text"
                className="form-control"
                id="pincode"
                name="pincode"
                onfocusout="validationpin()"
              />
            </div>
            <div className="col">
              <label for="state">
                State
                <p id="errstate"></p>
              </label>
              <input
                type="text"
                className="form-control"
                id="state"
                name="state"
                onfocusout="validationstate()"
              />
            </div>
          </div>

          <div className="registersubmit">
            <p id="test"></p>
            <button className="btn btn-outline-dark btn-lg">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}
