//http://api.weatherstack.com/current? access_key = YOUR_ACCESS_KEY& query = New York
// optional parameters:
// & units = m
// & language = en
// & callback = MY_CALLBACK

import request from "request";
import chalk from "chalk";
import { accesskey } from "./accesskey.js";

const url =
  "http://api.weatherstack.com/current?access_key=" +
  accesskey +
  "&query=Mumbai";
request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log(chalk.bgRed("Error occurred: " + error));
  } else if (response.body.success === false) {
    console.log(chalk.bgRed("Error occurred: " + response.body.error.info));
  } else if (response.body.success !== false) {
    //console.log(response.body);
    console.log(
      chalk.green(
        response.body.location.name +
          ", " +
          response.body.location.country +
          ": " +
          response.body.current.weather_descriptions[0] +
          ". It is currently " +
          response.body.current.temperature +
          " degrees."
      )
    );
    //   weather description . it is currently...weath
    //   response.body.current.temperature
  }
});
