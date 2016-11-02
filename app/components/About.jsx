var React = require('react');

var About = (props) => {
  return (
    <div>
        <div className="row">
          <div className="columns medium-4 large-6 small-centered">
            <h1 className="text-center">About Me</h1>
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
