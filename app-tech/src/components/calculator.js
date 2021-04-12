import React from 'react';
// import logo from './logo.svg'

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>the water would boil.</p>;
  }
  return <p>the water would not boil.</p>;
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { tempeture: '' }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // this.setState({
    //   tempeture: e.target.value,
    // })

    this.props.onTempetureChange(e.target.value);
  }

  render() {
    const tempeture = this.props.temperature;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>enter your tempeture in {scaleNames[scale]}</legend>
        <input value={tempeture} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(tempeture)}></BoilingVerdict>
      </fieldset>
    );
  }
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheutChange = this.handleFahrenheutChange.bind(this);
    this.state = { temperature: '', scale: 'c' };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }
  handleFahrenheutChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTempetureChange={this.handleCelsiusChange}
        ></TemperatureInput>
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTempetureChange={this.handleFahrenheutChange}
        ></TemperatureInput>
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
export default Calculator;
