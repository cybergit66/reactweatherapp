var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=7d00e73360b390bb1eaed0e22fab670e&units=imperial';

// My API 7d00e73360b390bb1eaed0e22fab670e

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      debugger;
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(err){
      throw new Error(err.response.data.message);
    });
  }
}
