import request from "request";
import { accesskey } from "./accesskey.js";

export default function getWeather(city, callback) {
  const url =
    "http://api.weatherstack.com/current?access_key=" +
    accesskey +
    "&query=" +
    city;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Error occurred: " + error);
    } else if (response.body.success === false) {
      callback("Error occurred: " + response.body.error.info);
    } else if (response.body.success !== false) {
      callback(
        response.body.location.name +
          ", " +
          response.body.location.country +
          ": " +
          response.body.current.weather_descriptions[0] +
          ". It is currently " +
          response.body.current.temperature +
          " degrees."
      );
    }
  });
}
