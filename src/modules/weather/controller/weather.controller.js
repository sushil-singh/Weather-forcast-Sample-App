const helper = require('../helper/weather.helper');

// Hardcoded public url for fetching weather forcast
const forcastUrl = 'https://api.openweathermap.org/data/2.5/forecast'
const appid = '0049058f942c6a19bfa550036cbcb840'

/**
 *  This method is called from weather forcast route. 
     * @param {req} req
     * @param {res} res
*/
exports.getForecastByCity = async(req, res) => {
    try {
        console.log('Query params received from Input: ', req.query);
        let {city, orderBy} = req.query;
        orderBy = orderBy ? orderBy : 'asc'; // default orderBy to asc if not provided
        orderBy = orderBy.toLowerCase();
        // Throw error if wrong orderBy received as innput
        if(!['asc', 'desc'].includes(orderBy)){
            return res.status(400).json({ success: false, error: `Unsupported orderBy input, Please use "asc" or "desc"` }).end('');
        }
        // Throw error if city name is missing
        if (!city) {
            return res.status(400).json({ success: false, error: 'City name is missing' }).end('');
        }
        const url = `${forcastUrl}?q=${city}&appid=${appid}`;
        // Fetch weather forecast using public API
        return helper.requestAPI("GET", url).then((forecastRes) => {
            let formatedRes = helper.constructRes(forecastRes, orderBy);
            return res.status(200).send({
                success: true,
                data: formatedRes
            });
        }).catch(err => {
            console.log(`Could not fetch forecast for city ${city}, Error `, err);
            let {cod, message} = err
            return res.status(cod).json({ 
                success: false, 
                error: message ?  message : `Could not fetch forecast for city ${city}`
            }).end('');
        });
        
    } catch (error) {
        console.log("Error while fetching forecast" + error);
        return res.status(500).json({ success: false, error: error }).end('');
    }
}