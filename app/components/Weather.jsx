var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getDefaultProps: function(){
    return {
      message: 'This is the default weather message'
    };
  },
  render: function(){
    return (
        <div>
          <WeatherForm/>
          <WeatherMessage/>
        </div>
    );
  }
});

module.exports = Weather;
