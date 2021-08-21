import React, { useState } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    alignItems: "center",
  },
  button: {
    height: "100%",
  },
});

const SearchBar = (props) => {
  const classes = useStyles();
  const { fetchWeather } = props;
  const [term, setTerm] = useState("");

  const onInputChange = (e) => setTerm(e.target.value);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const cities = props.weather.map((w) => w.city.name.toLowerCase());
    if (!cities.includes(term.trim().toLowerCase())) {
      fetchWeather(term);
    }
    setTerm("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode == 13) {
      onFormSubmit(e);
    }
  };

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={10}>
        <TextField
          fullWidth
          id="outlined-basic"
          variant="outlined"
          placeholder="Get a five-day forecast in your favorite Canadian cities"
          value={term}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={onFormSubmit}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather }, dispatch);
};

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
