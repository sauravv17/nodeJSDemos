const path = require("path");
const express = require("express");

const app = express();

const publicDirPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");

console.log(publicDirPath);
app.use(express.static(publicDirPath));

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is cloudy",
    location: "Chennai",
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
