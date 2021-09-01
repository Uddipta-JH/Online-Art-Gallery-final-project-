import axios from "axios";
import React, { Component } from "react";

class Upload extends Component {
  state = {
    file: null,
  };

  handleFile(e) {
    let file = e.target.files[0];

    this.setState({ file: file });
    // console.log(e.target.files[0]);
  }

  handleUpload(e) {
    let file = this.state.file;
    const formData = new FormData();
    formData.append("artpic", file);
    console.log(file);
    axios({
      url: `http://localhost:8081/files/pic`,
      method: "POST",
      body: file,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  render() {
    return (
      <div>
        Upload
        <form encType="multipart/form-data">
          <input
            type="file"
            name="file"
            multiple
            onChange={(e) => this.handleFile(e)}
          />
          <button type="button" onClick={(e) => this.handleUpload(e)}>
            Upload
          </button>
        </form>
      </div>
    );
  }
}

export default Upload;

// import React from "react";
// import axios, { put } from "axios";

// class SimpleReactFileUpload extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       file: null,
//     };
//     this.onFormSubmit = this.onFormSubmit.bind(this);
//     this.onChange = this.onChange.bind(this);
//     this.fileUpload = this.fileUpload.bind(this);
//   }

//   onFormSubmit(e) {
//     e.preventDefault(); // Stop form submit
//     this.fileUpload(this.state.file).then((response) => {
//       console.log(response.data);
//     });
//   }

//   onChange(e) {
//     this.setState({ file: e.target.files[0] });
//   }

//   fileUpload(file) {
//     const url = "http://localhost:8081/files/pics";
//     const formData = new FormData();
//     formData.append("file", file);
//     const config = {
//       headers: {
//         "content-type": "multipart/form-data",
//       },
//     };
//     return put(url, formData, config);
//   }

//   render() {
//     return (
//       <form onSubmit={this.onFormSubmit}>
//         <h1>File Upload</h1>
//         <input type="file" onChange={this.onChange} />
//         <button type="submit">Upload</button>
//       </form>
//     );
//   }
// }

// export default SimpleReactFileUpload;
