const router = require('express').Router();

router.post("/get-weather", async (req, res) => {
    let ressult = req.city;
    res.status(200).json(ressult);
  });
  
  router.post("/temperature", async (req, res) => {
    let ressult = req.city.main;
    res.status(200).json(ressult);
  });
  
  router.post("/wind", async (req, res) => {
    let ressult = req.city.wind;
    res.status(200).json(ressult);
  });
  
  router.post("/weather", async (req, res) => {
    let ressult = req.city.weather;
    res.status(200).json(ressult);
  });

  module.exports = router;