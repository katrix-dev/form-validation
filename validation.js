function go(){
    var formstatus = true;
	var name = document.getElementById("fname").value;
	if(name==""){
		formstatus=false;
		document.getElementById("fname").style.borderColor="red";
	}else{
		document.getElementById("fname").style.borderColor="green";
	}
	
	//validation for mobile Number
	var mpattern = /^[6-9]\d{9}$/;
	var mobileno = document.getElementById("mobile").value;
	if( !mpattern.test(mobileno) ){
		formstatus=false;
		document.getElementById("mobile").style.borderColor="red";
	}else{
		document.getElementById("mobile").style.borderColor="green";
	}
	
	//for email validation
	
	var epattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var email = document.getElementById("emailid").value;
	if( !epattern.test(email)) {
		formstatus=false;
		document.getElementById("emailid").style.borderColor="red";
	}else{
		document.getElementById("emailid").style.borderColor="green";
	}
	
	//for password validation empty and min length validation

	var pass = document.getElementById("mypassword").value.trim();
	if (pass.length<6){
		formstatus=false;
		document.getElementById("mypassword").style.borderColor="red";
	}else{
		document.getElementById("mypassword").style.borderColor="green";
	}

	//Radio button as gender validation

	var m = document.getElementById("male").checked;
	var f = document.getElementById("female").checked;
	if(m == false && f== false){
		formstatus=false;
		document.getElementById("gendererror").innerText = "Invalid Gender";
	}else{
		document.getElementById("gendererror").innerText = "";
	}
	
	//validation for city

	var cityname = document.getElementById("city").value;
	if(cityname==""){
		formstatus=false;
		document.getElementById("city").style.borderColor="red";
	}else{
		document.getElementById("city").style.borderColor="green";
	}

	//validation for textarea

	var add=document.getElementById("address").value;
	if(add<50){
		formstatus=false;
		document.getElementById("address").style.borderColor="red";
	}else{
		document.getElementById("address").style.borderColor="green";
	}

	//validation for checkboxes

	var tnc = document.getElementById("tnc").checked;
	if(tnc==false){
		formstatus=false;
		document.getElementById("tncerror").innerText = "Please agree to terms & conditions";
	}else{
		document.getElementById("tncerror").innerText = "";
	}

	//do not write anything after this line
	if(formstatus==true){
		document.getElementById("message").innerText = "Success, Please Wait ";
		document.getElementById("myform").submit();
	}else{
		document.getElementById("message").innerText = "Failed. Invalid Input ";
	}
}
