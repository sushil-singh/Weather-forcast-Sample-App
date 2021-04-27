const express = require('express');
const weatherRoute = require('./modules/weather/route')
const router = express.Router();
const app = express();
const port = 9000

app.use('/', router);
router.use("/weather", weatherRoute.normalizedAPIs);

app.listen(port, () => {
    console.log(`Weather forecast app running at http://localhost:${port}`)
})