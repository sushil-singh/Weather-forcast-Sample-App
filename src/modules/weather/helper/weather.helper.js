const request = require('request').defaults({ strictSSL: false });

/**
 *  This method can be used to call external api. 
 * It returns the fetched response from http request
     * @param {http method} method
     * @param {http url} url
     * @param {payload for the request} payload
*/
exports.requestAPI = (method, url, payload) => {
    var reqObj = {
        uri: url,
        method: method,
        json: true,
        headers: {
            "Content-Type": 'application/json',
            "Accept":'application/json'
        },
    };
    if (payload) {
        reqObj.body = payload;
    }
    return new Promise((resolve, reject) => {
        request(reqObj, (error, response, body) => {
            if (!error && response.statusCode >= 200 && response.statusCode < 300) {
                resolve(body);
            } else {
                console.log("API error response " + JSON.stringify(body));
                reject(body);
            }
        });
    });
}

/**
 *  This method can be used to filterout unwanted data and construct expected sorted res . 
     * @param {data to be formated} res
     * @param {asc or desc order} orderBy
*/
exports.constructRes = (res, orderBy) => {
    let result = [];
    res.list.forEach(el => {
        let {temp, temp_min, temp_max, pressure, sea_level, grnd_level, humidity, temp_kf } = el.main
        let {speed, deg} = el.wind
        result.push({
            dt: el.dt,
            temp: {temp, temp_min, temp_max, pressure, sea_level, grnd_level, humidity, temp_kf},
            wind: {speed, deg}
        });
    });
    result.sort((a,b) => {
        return orderBy === 'asc' ? a.dt - b.dt : b.dt - a.dt;
    })
    return result;
}