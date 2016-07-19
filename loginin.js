function login() {
		 var all_emails = ["amaryahg@yopro.com"];

		var entered_email = ($('input[name="email"]').val());

		for (var email in all_emails) {
			alert(all_emails[email] +"  == "+entered_email);
			
			if (all_emails[email] == entered_email){
				
				window.location('www.google.com');
				
				break;
			}
			else {
			
			}
		}
}
	  