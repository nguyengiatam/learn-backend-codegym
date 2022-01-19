require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const routerFindCity = require('./route/routerFindCity');
const API = require("./api.js");
const PORT = process.env.PORT || 3005;

let cityData;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const getCityId = async (req, res, next) => {
  try {
    if (req.method == 'GET') {
      req.cityId = req.query.id;
      req.method = 'POST';
    } else {
      let { name } = req.body;
      let city = cityData.find(data => data.name == name);
      if (city) {
        req.cityId = city.id;
      } else {
        return next({status: 404})
      }
    }
    next();
  } catch (err) {
    next(err)
  }
}

const getApi = async (req, res, next) => {
  try {
    req.city = await API.getCityWeather(req.cityId);
    next();
  } catch (err) {
    err.status = 404;
    next(err);
  }
}

const handleError = (err, req, res, next) => {
  console.log('Lỗi: ', err.message);
  let codeErr = 400;
  if(err.status){
    codeErr = err.status;
  }
  res.status(codeErr).json(err);
}
app.get('/', (req, res, next) => {
  res.status(200).sendFile(`${__dirname}/index.html`);
})

app.use('/find', getCityId, getApi, routerFindCity);
app.use(handleError);

app.listen(PORT, async () => {
  try {
    cityData = await API.getListCity();
    console.info(`Server is running at ${PORT}`);
  } catch (err) {
    console.error(err);
  }
});

module.exports = app;