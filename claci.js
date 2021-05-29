const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/", function(req, res){
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var result = weight/(height*height);
  res.send("BMI of the given info is " + result);

})

app.listen(3000, function(){
  console.log("yes, the server is running...")
})
