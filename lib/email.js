var emailjs = require("emailjs");
var server = emailjs.server.connect({
    user: "AKIAIWFO6LJLHG3PNSFA",
    password: "Ap8vMfZ9hDExzC//b939Zfs18qoKv+mQ7KuQHR2WXjhl",
    host: "email-smtp.us-west-2.amazonaws.com",
    ssl: true
 });
module.exports.sendEmail = function(data) {
        let email=data.email;
        let emailMessage=data.emailMessage;
        let subject=data.subject;
        server.send({
            text: "Forkspot email verification",
            from: "Forkspot <info@forkspot.com>",
            to: email + " " + email,
            subject: subject,
            bcc:'anuj@symbyotic.com',
            attachment: [{
                  data: emailMessage,
                  alternative: true
               },
            ]
         },function (err, message)
                 {
                    console.log(arguments);
                 });
        }