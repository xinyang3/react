import React from 'react';
import ReactDOM from 'react-dom';
import { func } from 'prop-types';

function HelloWorld() {
  return (
    <div>hello world</div>
  )
}

function HelloWorld2 (props) {
    return React.createElement('span', {
        className: 'song-name'
      },
      props.song
    )
}

function ValidIndicator () {
  var isValid = true;
  return (
    <span>
      {isValid && 'valid'}
      {!isValid && 'not valid'}
    </span>
  )
}

ReactDOM.render(
  // <HelloWorld />,
  // <HelloWorld2 song="123"/>,
  <ValidIndicator />,
  document.getElementById('root')
);