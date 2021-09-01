// const state={Maharashtra: "Mumbai", West_Bengal:"Kolkata"}
// const regstate=document.getElementById("states");
// let a=regstate.value;
// console.log(JSON.stringify(state.a);
// =; document.getElementById("rcity").value

// document.getElementById("errage").innerHTML="";
// var age=document.getElementById("rage").value;
// var no=document.getElementById("rnumber").value;
// var emptyfield = "*Required*";

export function validationname() {
  document.getElementById("errname").innerHTML = "";
  var name = document.getElementById("name").value;
  if (name != 0 && name.length < 3) {
    document.getElementById("errname").innerHTML = "*Invalid name";
  }
}

// function validationpassword() {
//   document.getElementById("errpassword").innerHTML = "";
//   var password = document.getElementById("pword").value;
//   if (password.length < 6 && password.length >= 1) {
//     document.getElementById("errpassword").innerHTML = "*Minimum 6";
//   }
// }

// function validationmnum() {
//   document.getElementById("errno").innerHTML = "";
//   var mnum = document.getElementById("no").value;
//   var notnum = isNaN(document.getElementById("no").value);
//   if (notnum) {
//     document.getElementById("errno").innerHTML = "*Invalid Input";
//   } else if (mnum.length != 10 && mnum != 0) {
//     document.getElementById("errno").innerHTML = "*Valid no required";
//   }
// }

// function validationtype() {
//   document.getElementById("errtype").innerHTML = "";
//   var usertype = document.getElementById("type").value;
//   if (usertype == 0) {
//     document.getElementById("errtype").innerHTML = emptyfield;
//   }
// }

// function validationbloodgroup() {
//   document.getElementById("errbgroup").innerHTML = "";
//   var bloodgroup = document.getElementById("bgroup").value;
//   if (bloodgroup == 0) {
//     document.getElementById("errbgroup").innerHTML = emptyfield;
//   }
// }

// function validationeid() {
//   var message = document.getElementById("eid").value;
//   var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
//   var atpos = message.indexOf("@");
//   var dotpos = message.lastIndexOf(".");

//   if (
//     message == "" ||
//     message.match(mailformat) ||
//     (atpos > 1 && dotpos - atpos > 2)
//   ) {
//     document.getElementById("errid").innerHTML = "";
//   } else {
//     document.getElementById("errid").innerHTML = "Wrong email format";
//   }
// }

// function validationpin() {
//   document.getElementById("errpin").innerHTML = "";
//   var pin = document.getElementById("pincode").value;
//   if (isNaN(pin) || (pin.length != 6 && pin != 0)) {
//     document.getElementById("errpin").innerHTML = "Invalid";
//   }
// }

// function validationstate() {
//   document.getElementById("errstate").innerHTML = "";
// }

// function validationcity() {
//   document.getElementById("errcity").innerHTML = "";
// }

// function validationtype() {
//   document.getElementById("errtype").innerHTML = "";
// }

// function validationlocation() {
//   document.getElementById("errlocation").innerHTML = "";
// }

// var date = new Date();

// function validationbdate() {
//   document.getElementById("errbdate").innerHTML = "";
// }

// function eligibility() {
//   document.getElementById("errbdate").innerHTML = "";
//   document.getElementById("errweight").innerHTML = "";
//   var w = document.getElementById("weight").value;
//   var year = date.getFullYear();
//   var byear = new Date(document.getElementById("bdate").value).getFullYear();
//   var a = year - byear;
//   if (a < 18) {
//     document.getElementById("errbdate").innerHTML = "*Not eligible";
//   }

//   if (w < 45 && w >= 1) {
//     document.getElementById("errweight").innerHTML = "*Not eligible";
//   }
// }

// function empty() {
//   document.getElementById("errtype").innerHTML = "";
//   document.getElementById("errlocation").innerHTML = "";
//   document.getElementById("errcity").innerHTML = "";
//   document.getElementById("errstate").innerHTML = "";
//   document.getElementById("errpin").innerHTML = "";

//   var name = document.getElementById("name").value;
//   var password = document.getElementById("pword").value;
//   var mobile = document.getElementById("no").value;
//   var type = document.getElementById("type").value;
//   var bdate = document.getElementById("bdate").value;
//   var ltion = document.getElementById("location").value;
//   var city = document.getElementById("city").value;
//   var pcode = document.getElementById("pincode").value;
//   var state = document.getElementById("state").value;

//   if (name == 0) {
//     document.getElementById("errname").innerHTML = emptyfield;
//   }
//   if (password == 0) {
//     document.getElementById("errpassword").innerHTML = emptyfield;
//   }

//   if (mobile == 0) {
//     document.getElementById("errno").innerHTML = emptyfield;
//   }
//   if (type == 0) {
//     document.getElementById("errtype").innerHTML = emptyfield;
//   }
//   if (bdate == 0) {
//     document.getElementById("errbdate").innerHTML = emptyfield;
//   }
//   if (ltion == 0) {
//     document.getElementById("errlocation").innerHTML = emptyfield;
//   }
//   if (city == 0) {
//     document.getElementById("errcity").innerHTML = emptyfield;
//   }
//   if (pcode == 0) {
//     document.getElementById("errpin").innerHTML = emptyfield;
//   }
//   if (state == 0) {
//     document.getElementById("errstate").innerHTML = emptyfield;
//   }
// }
