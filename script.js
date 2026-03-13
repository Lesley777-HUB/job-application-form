function validateForm(){
let name = document.getElementById("fullname").value;
let email = document.getElementById("email").value;
let telephone = document.getElementById("telephone").value;
if(name === "" || email === "" || telephone === ""){
alert("Please complete all required fields.");
return false;
}
return true;
}
