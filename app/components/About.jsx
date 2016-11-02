var React = require('react');

var About = (props) => {
  return (
    <div>
        <div className="row">
          <div className="columns medium-4 large-6 small-centered">
            <h3>About Me</h3>
            <p>My Profile</p>
            <ul>
                <li><a href="#">React</a></li>
                <li><a href="#">NodeJS</a></li>
            </ul>
          </div>
        </div>
    </div>

    )
};

module.exports = About;
