const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static("Public"));

var name;
var email;
var query;

/* Nodemailer Setup */
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service : 'Gmail',
    
    auth: {
      user: 'greenfieldsnursery.vadodara@gmail.com',
      pass: 'you123#456#',
    }
});

app.get("/", function(req, res){
    res.render("index");
})

app.post("/form-submission", function(req, res){
    name = req.body.name;
    email = req.body.email;
    query = req.body.query;
    var mailOptions={
        to: "amaanaliclipwala40@gmail.com",
        subject: "Message from " + name,
        html: "<h2>Name: " + name + "</h2><h2>EmailId: " + email + "</h2><h2>Message: " + query + "</h2>"
    };
     
     transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render("index");
    });  
})


const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
    console.log("Server started on port ")+PORT;
})