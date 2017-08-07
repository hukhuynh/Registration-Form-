/**************************************
 TITLE:						
 AUTHOR: Huukiet Kevin Huynh			
 CREATE DATE: 
 PURPOSE: 		 LAST MODIFIED ON: 
 LAST MODIFIED BY: Huukiet Kevin Huynh
 MODIFICATION HISTORY:
 29 Nov 2016
 5 Dec 2016 - Added optional info as well
 ***************************************/

$(document).ready(function(){



/***************************Form Validation*****************************/


$("#whole").validate({

		
	rules: {
		firstName:{
			required:true,
			minlength:2
		},
		lastName:{
			
			required:true,
			minlength:2
		},
		email:{
			required:true,
			email:true
		},
		phoneNum:{
			digits:true,
			required:true,
			minlength:7
		},
		username:{
			required:true,
			minlength:7
		},
		password:{
			required:true,
			minlength:7
		},
		confirmPassword:{
			required:true,
			equalTo: "#passWord1"
			
		}
	},//end rules
	
	messages:{
		firstName:{
			required:"Please enter first name",
			minlength: "Must be more than 2 characters"
		},
		lastName:{
			required:"Please enter last name",
			minlength: "Must be more than 2 characters"
		},
		email:{
			required:"Please enter email",
			email:"Please enter valid email address"
		},
		phoneNum:{
			digits:"Please enter valid number",
			required:"Please enter phone number",
			minlength:"Must be at least 7 digits long"
		},
		username:{
			required:"Please enter a username",
			minlength:"Username must be at least 7 characters long"
		},

		password:{
			required:"Please enter password",
			minlength:"Password must be at least 7 characters long"
		},
		confirmPassword:{
			required:"Please reenter password",
			equalTo:"Passwords do not match"
		}

	},//end messages
});//end .validate

/**************************************Functionality**********************************************************/

/************************before validation to prevent double click of the submit button********/
$("#whole").submit(function(event){//submit button checks if form is validated and then uses function outputDisplay
	if($("#whole").valid()){
		outputDisplay();
	}
		
	event.preventDefault();
});//end .submit

/*********************************************************************/



/*******************************
NAME: outputDisplay
PURPOSE: assigns values to variables and echoes out input to div
PARAMETERS:None
RETURN VALUE:
Echoes out all input values
*******************************/
function outputDisplay(){//function hides form and then adds concatenated string to empty div



	//store in var using val()
	var strFName = new String($("#fName").val());
	var strLName = new String($("#lName").val());
	var strEmail = $("#Email").val();
	var strPhone = $("#phone").val();
	var strUserName = $("#userName").val();
	var strPassWord = $("#passWord").val();
	var strDOB = $("#date").val();
	var strGender = $('input[name="gender"]:checked','#set').val();
	var strCity = $("#City").val();
	var strState = $("#states").val();
	var strBooks = $("#spinner_1").val();
	
	//concatenated strings		
	var outName = new String("Name: " + strFName + " " + strLName);
	var outEmail = new String("Email: " + strEmail);
	var outPhone = new String("Phone: " + strPhone);
	var outUserName = new String("User Name: " + strUserName);
	var outPassWord = new String("Password: "+ strPassWord);
	var outDOB = new String("Date of Birth: " + strDOB);
	var outGender = new String("Gender: " + strGender);
	var outCity = new String("City: " + strCity);
	var outState = new String("State: " + strState);
	var outBooks = new String("Books read: " + strBooks);
	
	
	//hides form and echoes input
	$("#whole").hide();
	$("#outname").text(outName);
	$("#outemail").text(outEmail);
	$("#outphone").text(outPhone);
	$("#outusername").text(outUserName);
	$("#outpassword").text(outPassWord);
	$("#outdob").text(outDOB);
	$("#outgender").text(outGender);
	$("#outcity").text(outCity);
	$("#outstate").text(outState);
	$("#outbooks").text(outBooks);
		
}//end outputDisplay			
		
	


			
					
}); // end of $(document).ready()