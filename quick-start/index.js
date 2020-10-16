var Component = React.createClass({
  render: function () {
    return React.createElement('h1')
  }
})


ReactDOM.render(
  React.DOM.h1(null, "Hello world!"),
  document.getElementById("app")
);
