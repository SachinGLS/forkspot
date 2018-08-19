let contactEmailInfo = {
	contactEmail : 'email2sac@gmail.com',
	contactSubject : 'Enquiry on Forkspot',
	contactEmailMessage : 'Name: {name} <br> Email: {email} <br> Message: {message} <br><br><br> From,<br>Team Forkspot',
	contactSuccessMsg : 'Message sent successfully'
}

module.exports = function() {
	return contactEmailInfo;
}