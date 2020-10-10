const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https")



const app  = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req , res) {
  res.sendFile(__dirname + "/signup.html")

})

app.post("/",function(req ,res){
 const firstName = req.body.fName;
 const lastName = req.body.lName;
 const  email = req.body.email

 const data = {
   members: [
     {
       email_address: email,
       status: "subscribed",
       merge_field: {
         FNAME: firstName,
         LNAME: lastName
       }
     }
   ]
 }



 const jsonData = JSON.stringify(data);
 const url = "https://us2.api.mailchimp.com/3.0/lists/e29e5125ce";
 const options = {
   method: "POST",
   auth: "athul1: 0d7896bae0c6648117cd6a1097977aa6-us2"

 }


  const request = https.request(url, options, function(){



   response.on("data", function(data){
     console.log(JSON.parse(data))
   })

   request.write(jsonData);
   request.end();

 })

})






app.listen(process.env.PORT, function(){
  console.log("server is running on port 3000")
});



// API key
// 0d7896bae0c6648117cd6a1097977aa6-us2


// List // IDEA:
// e29e5125ce
