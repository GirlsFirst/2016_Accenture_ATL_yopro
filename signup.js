

function employer_signup(){
	var firname_element = document.getElementById('user-firn');
	var firname = firname_element.value;

	var lasname_element = document.getElementById('user-lasn');
	var lasname = lasname_element.value;
	
	var compname_element = document.getElementById('user-compn');
	var compname = compname_element.value;

	var phonum_element = document.getElementById('user-phonum');
	var phonum = phonum_element.value;

	var email_element = document.getElementById('user-email');
	var email = email_element.value;

	var pass_element = document.getElementById('user-pw');
	var pass = pass_element.value;

	var passrep_element = document.getElementById('user-pw-repeat');
	var passrep = passrep_element.value;
	
	var all_firnames = [];
	var all_lasnames = [];
	var compnames = [];
	var phonums = [];
	var passreps = []; 
	var all_emails = [];
	var passwords = [];

	
	alert(firname);
	alert(lasname);
	alert(compname);
	alert(phonum);
	alert(email);
	alert(pass);

	for (var i = 0; i < all_emails.length; i++) {
		if (all_emails[i] === email && passwords[0] === pass) {
			window.location.replace("homestudent.html");
			return false;
		
			} 
	}
		

}
