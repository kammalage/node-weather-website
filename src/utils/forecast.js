const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=45e8d7348501b35d60d836c064821c13&query=' + latitude + ',' + longitude +'&units=f'

    request({ url, json: true}, (error, { body }) => {
        if(error){
            callback("Unable to connect to weather service.", undefined);
        } else if(body.error){
            callback("Coordinates entered were invalid, please enter valid cooridnates.", undefined);
        }
        else {
            const current = body.current;

            callback(undefined, current.weather_descriptions[0] + " It is currently " + current.temperature + " degrees out. It feels like " + current.feelslike + " degrees out.");
        }
    })
}

module.exports  = forecast;