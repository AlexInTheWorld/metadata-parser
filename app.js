
// Express config.
const express = require("express");
const app = express();
const router = require("./routes/routes")



// make all the files in 'public' available
app.use(express.static(__dirname + "/public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

//Router middleware
app.use("/", router)

// send the default array of dreams to the webpage
app.get("/dreams", (req, res) => {
  // express helps us take JS objects and send them as JSON
  res.json({message: 'nothing to show here'});
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

