import React from "react";

import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  label: {
    textAlign: "center",
  },
});

const Chart = (props) => {
  const { color, data, units } = props;
  const classes = useStyles();

  const average = (data) => {
    const res = data.reduce((prev, curr) => prev + curr, 0) / data.length;
    return res.toFixed(2);
  };

  return (
    <div>
      <Sparklines height={120} width={180} style={{height: '150px'}} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div className={classes.label}>
        {average(data)} {units}
      </div>
    </div>
  );
};

export default Chart;
