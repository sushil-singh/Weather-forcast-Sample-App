const express = require('express');
const weatherController = require('./controller/weather.controller');

module.exports.normalizedAPIs = (() => {
    const router = express.Router();
    router.get('/forecast', weatherController.getForecastByCity);
    return router;
})();