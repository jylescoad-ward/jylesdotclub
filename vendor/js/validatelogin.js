console.log(`var database = require('./accounts.json')`);
function validateLogin(){
	var usrname = document.forms["devLogin"]["uname"].value;
	var passwd = document.forms["devLogin"]["pwd"].value;
	
	if (usrname === "test" && passwd === database.test){
		msgbox("Logged in. Redirecting to Developer Network");
	}
	else if (usrname === "admin" && passwd === database.admin){
		msgbox("Logged in. Redirecting to Developer Network");
	}
	else if (passwd !== database.admin || database.test){
		msgbox("Incorrect Details");
	}
}