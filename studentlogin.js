

function login(){
	var email_element = document.getElementById('useremail');
	var email = email_element.value;
	var pass_element = document.getElementById('userpass');
	var pass = pass_element.value;
	
	var all_emails = ["amaryah@yopro.com", "samaria@yopro.com", "citlalli@yopro.com", "alexandra@yopro.com"]
	var passwords = ["propro"]

	
			
	for (var i = 0; i < all_emails.length; i++) {
		if (all_emails[i] === email && passwords[0] === pass) {
			window.location.replace("homestudent.html");
			return false;
		
			} 
	}
		

}
