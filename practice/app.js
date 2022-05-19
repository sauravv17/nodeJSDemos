import express from "express";
import request from "request";
import { accesskey } from "./accesskey.js";

const app = express();
const url =
  "http://api.weatherstack.com/current?access_key=" +
  accesskey +
  "&query=Delhi";

// const publicDirPath = path.join(__dirname, "../public");
// console.log(publicDirPath);
// app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.send("<h1>Hello Express!!..</h1>");
});

app.get("/help", (req, res) => {
  res.send("<h1>Help Express!!..</h1>");
});

app.get("/weather", (req, res) => {
  request({ url: url, json: true }, (error, response) => {
    var s =
      response.body.location.name +
      ", " +
      response.body.location.country +
      ": " +
      response.body.current.weather_descriptions[0] +
      ". It is currently " +
      response.body.current.temperature +
      " degrees.";
    return s;
  });
  res.send("<h1>Weather of..</h1>");
});

app.listen(8081, () => {
  console.log("server is up on port 8081");
});
