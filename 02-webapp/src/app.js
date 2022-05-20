import path from "path";
import express from "express";
import hbs from "hbs";
import getWeather from "./utils/getweather.js";

const app = express();
const dirname = "D:\\training\\java_fsd\\nodeJSDemos\\02-webapp\\src";
const publicDirPath = path.join(dirname, "../public");
const viewsPath = path.join(dirname, "../templates/views");
const partialsPath = path.join(dirname, "../templates/partials");

//console.log(publicDirPath);

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Hello !! Welcome to nodeApp..",
    name: "Saurav",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Us",
    name: "SS",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Customer Support Page",
    number: "100",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.city) {
    return res.send({
      error: "Address not Provided",
    });
  }
  getWeather(req.query.city, (data) => {
    res.render("index", {
      forecast: data,
      city: req.query.city,
      title: "Hello !! Welcome to nodeApp..",
      name: "Saurav",
    });
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404!!!! Page not Found",
    name: "Saurav",
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
