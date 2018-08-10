import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import LocationList from "./components/LocationList"
import ForecastExtended from './components/ForecastExtended';
import './App.css'
import SimpleAppBar from './components/MaterialComp/SimpleAppBar';
import SimplePaper from './components/MaterialComp/SimplePaper';

const cities = ["Santiago,cl",
  "Buenos Aires,ar",
  "Columbus,us",
  "Bogotá,col",
  "Ciudad de México,mx"]

class App extends Component {
  constructor() {
    super();
    this.state = { city: null }
  }
  handleSelectedLocation = city => {
    this.setState({ city })
  }
  render() {
    const { city } = this.state
    return (

      <Grid>
        <Row>
          <SimpleAppBar Title={"Weather"} />
        </Row>
        <Row className="App">
          <Col md={12} lg={6} >
            <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />
          </Col>
          <Col md={12} lg={6} >
            <SimplePaper color={"#f9fff7"}>
              <div className="detail">
                {
                  city &&
                  <ForecastExtended city={city} />
                }
              </div>
            </SimplePaper>
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default App;
