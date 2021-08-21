import React from "react";

import { connect } from "react-redux";

import Table from "@material-ui/core/Table";
import Typography from "@material-ui/core/Typography";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Chart from "../components/Chart";
import Paper from "@material-ui/core/Paper";
import GoogleMap from "../components/GoogleMap";

const WeatherList = (props) => {
  console.log({props})
  const renderWeather = (cityData, index) => {
    const name = cityData.city.name;
    const temps = cityData.list.map((weather) => weather.main.temp - 273.15);
    const pressures = cityData.list.map((weather) => weather.main.pressure);
    const humidities = cityData.list.map((weather) => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <TableRow key={name}>
        <TableCell align="center">
          <Typography>{name}</Typography>
        </TableCell>
        <TableCell align="center">
          <GoogleMap lat={lat} lon={lon} />
        </TableCell>
        <TableCell align="center">
          <Chart data={temps} color="orange" units="C" />
        </TableCell>
        <TableCell align="center">
          <Chart data={pressures} color="green" units="hPa" />
        </TableCell>
        <TableCell align="center">
          <Chart data={humidities} color=" black" units="%" />
        </TableCell>
      </TableRow>
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">City Name</TableCell>
            <TableCell align="center">Map</TableCell>
            <TableCell align="center">Temperature (C)</TableCell>
            <TableCell align="center">Pressure (hPa)</TableCell>
            <TableCell align="center">Humidity (%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{props.weather.map(renderWeather)}</TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);
