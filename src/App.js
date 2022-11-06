import React, { Component } from 'react'
import Info from './Component/Info';
import Form from './Component/Form';
import Footer from './Component/Footer';
import './App.css';
class App extends Component {
  state = {
    city: ``,
    country: ``,
    temperature: ``,
    description: ``,
    humidity: ``,
    windSpeed: ``,
    error: ``,
  }
  render() {
    this.handleSubmit = async (e) => {
      e.preventDefault();
      const key = "fa49fb49c319b9459568057985932cd4"
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const metric = `&units=metric`
      const imperial = `&units=imperial`
      const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${key}${metric}`)
      const data = await api.json();
      if (city && country) {
        this.setState({
          city: data.name,
          country: data.sys.country,
          temperature: data.main.temp,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          error: ``,
        })
      } else {
        this.setState({
          city: ``,
          country: ``,
          temperature: ``,
          description: ``,
          humidity: ``,
          windSpeed: ``,
          error: alert(`Please enter a vaild name`),
        })
      }
      console.log(data);
    }
    return (
      <div className="App">
        <div className='app_container'>
          <Form handleSubmit={this.handleSubmit} />
          <Info
            city={this.state.city}
            country={this.state.country}
            temperature={this.state.temperature}
            description={this.state.description}
            humidity={this.state.humidity}
            windSpeed={this.state.windSpeed}
            error={this.state.error} />
            <Footer />
        </div>
      </div>
    );
  }
}
export default App;
