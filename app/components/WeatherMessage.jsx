var React = require('react');

var WeatherMessage = React.createClass({
  render: function(){
    return (
      <div>
        <p>This is the default weather message</p>
      </div>
    );
  }
});

module.exports = WeatherMessage;
