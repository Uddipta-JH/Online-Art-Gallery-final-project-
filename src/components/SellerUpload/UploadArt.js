//import logo from './logo.svg';
import { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import React, { useCallback } from "react";
import axios from "axios";
import swal from "sweetalert";

import "./App.css";

function UploadArt() {
  const history = useHistory();

  const [UploadArtDetails, setUploadArt] = useState({
    artistname: "",
    productname: "",
    style: "",
    auctionstatus: "",
    sellingprice: "",
    discription: "",
    // artpic: "",
  });

  const handleUploadArt = (e) => {
    e.preventDefault();
    if (
      UploadArtDetails.artistname == "" ||
      UploadArtDetails.productname == "" ||
      UploadArtDetails.style == "" ||
      UploadArtDetails.auctionstatus == "" ||
      UploadArtDetails.sellingprice == "" ||
      UploadArtDetails.discription == ""
      //|| UploadArtDetails.artpic == ""
    ) {
      swal("Error", "Please Fill evry details", "error");
    } else {
      postDataToServer(UploadArtDetails);
      e.preventDefault();
    }
  };

  const postDataToServer = useCallback((data) => {
    const formData = new FormData();
    formData.append("artistname", data.artistname);
    formData.append("productname", data.productname);
    formData.append("style", data.style);
    formData.append("auctionstatus", data.auctionstatus);
    formData.append("sellingprice", data.sellingprice);
    formData.append("discription", data.discription);
    // uploadData.append("name", data.artpic);
    console.log("emp =>" + JSON.stringify(data));

    axios.post(`http://localhost:8081/Upload/Art`, data).then((response) => {
      if (response.data == "success") {
        swal("Error!", "Upload Unsuccessful");
      }
    });
  });
  return (
    <>
      <div className="container border border-dark shadow-lg p-3 mb-5 bg-white rounded mt-5">
        <h4 className="text-center my-2 bg-dark text-light py-2">UPLOAD ART</h4>
        <form onSubmit={handleUploadArt} className="p-4 my-3">
          <div className="mx-5">
            <div className="form-group">
              <label>Artist Name:</label>
              <input
                name="artistname"
                value={UploadArtDetails.artistname}
                onChange={(e) => {
                  setUploadArt({
                    ...UploadArtDetails,
                    artistname: e.target.value,
                  });
                }}
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
                name="productname"
                value={UploadArtDetails.productname}
                onChange={(e) => {
                  setUploadArt({
                    ...UploadArtDetails,
                    productname: e.target.value,
                  });
                }}
                type="text"
                className="form-control"
                id="Pname"
                placeholder="Enter Product Name"
              />
              <span id="Pname" className="bg-danger"></span>
            </div>
            <div className="form-group">
              <label>Choose Style:</label>
              <select
                name="style"
                value={UploadArtDetails.style}
                onChange={(e) => {
                  setUploadArt({ ...UploadArtDetails, style: e.target.value });
                }}
                className="ml-5"
              >
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
              <input
                type="radio"
                id="yes"
                name="auctionstatus"
                value="yes"
                onChange={(e) => {
                  setUploadArt({
                    ...UploadArtDetails,
                    auctionstatus: e.target.value,
                  });
                }}
              />
              <label for="yes" className="ml-3">
                Yes
              </label>
              <br />
              <input
                type="radio"
                id="no"
                name="auctionstatus"
                value="no"
                onChange={(e) => {
                  setUploadArt({
                    ...UploadArtDetails,
                    auctionstatus: e.target.value,
                  });
                }}
              />
              <label for="no" className="ml-3">
                No
              </label>
              <br />
            </div>
            <div className="form-group">
              <label>Selling Price:</label>
              <input
                name="sellingprice"
                value={UploadArtDetails.sellingprice}
                onChange={(e) => {
                  setUploadArt({
                    ...UploadArtDetails,
                    sellingprice: e.target.value,
                  });
                }}
                type="text"
                className="form-control"
                id="Price"
                placeholder="Enter Amount in Rs."
              />
              <span id="Price" className="bg-danger"></span>
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                name="discrption"
                value={UploadArtDetails.discription}
                onChange={(e) => {
                  setUploadArt({
                    ...UploadArtDetails,
                    discription: e.target.value,
                  });
                }}
                id="description"
                cols="130"
                rows="3"
              />
              <span id="description" className="bg-danger"></span>
            </div>
            {/* <div className="form-group">
              <label>Upload Image:</label>
              <br />
              <input
                name="artpic"
                multiple
                value={UploadArtDetails.artpic}
                onChange={(e) => {
                  setUploadArt({
                    ...UploadArtDetails,
                    artpic: e.target.value,
                  });
                }}
                type="file"
                id="Pimage"
              />
            </div> */}
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
export default UploadArt;
