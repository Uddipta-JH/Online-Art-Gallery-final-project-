//import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <>
      <div className="container border border-dark shadow-lg p-3 mb-5 bg-white rounded mt-5">
        <h4 className="text-center my-2 bg-dark text-light py-2">UPLOAD ART</h4>
        <form action="" method="post" className="p-4 my-3">
          <div className="mx-5">
            <div className="form-group">
              <label>Artist Name:</label>
              <input
                type="text"
                className="form-control"
                id="Aname"
                placeholder="Enter Artist Name"
              />
              <span id="Aname" className="bg-danger"></span>
            </div>
            <div className="form-group">
              <label>Product Name:</label>
              <input
                type="text"
                className="form-control"
                id="Pname"
                placeholder="Enter Product Name"
              />
              <span id="Pname" className="bg-danger"></span>
            </div>
            <div className="form-group">
              <label>Choose Style:</label>
              <select id="" className="ml-5">
                <label htmlFor="" />
                <option value="Oil Painting">Oil Painting</option>
                <option value="Digital Painting">Digital Painting</option>
                <option value="Matte Painting">Matte Painting</option>
                <option value="WaterColour Painting">
                  WaterColour Painting
                </option>
                <option value="Spray Painting">Spray Painting</option>
              </select>
            </div>
            <div className="form-group">
              <label>Participate in auction:</label>
              <br />
              <input type="radio" id="yes" name="fav_language" value="HTML" />
              <label for="yes" className="ml-3">
                Yes
              </label>
              <br />
              <input type="radio" id="no" name="fav_language" value="CSS" />
              <label for="no" className="ml-3">
                No
              </label>
              <br />
            </div>
            <div className="form-group">
              <label>Selling Price:</label>
              <input
                type="text"
                className="form-control"
                id="Price"
                placeholder="Enter Amount in Rs."
              />
              <span id="Price" className="bg-danger"></span>
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea name="describe" id="description" cols="130" rows="3" />
              <span id="description" className="bg-danger"></span>
            </div>
            <div className="form-group">
              <label>Upload Image:</label>
              <br />
              <input type="file" id="Pimage" />
            </div>
          </div>
          <div className="text-center">
            <br></br>
            <input type="submit" value="Pay" className="btn btn-primary px-5" />
          </div>
        </form>
      </div>
    </>
  );
}
export default App;
