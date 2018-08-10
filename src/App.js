import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import LocationListContainer from "./containers/LocationListContainer"
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer"

import SimpleAppBar from './components/MaterialComp/SimpleAppBar'
import SimplePaper from './components/MaterialComp/SimplePaper'

import './App.css'

const cities = ["Santiago,cl",
  "Buenos Aires,ar",
  "Columbus,us",
  "Bogotá,col",
  "Ciudad de México,mx"]

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <SimpleAppBar Title={"Weather"} />
        </Row>
        <Row className="App">
          <Col md={12} lg={6} >
            <LocationListContainer cities={cities} />
          </Col>
          <Col md={12} lg={6} >
            <SimplePaper color={"#f9fff7"}>
              <div className="detail">
                <ForecastExtendedContainer />
              </div>
            </SimplePaper>
          </Col>
        </Row>
      </Grid>

    )
  }
}

export default App
