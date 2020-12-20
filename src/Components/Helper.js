import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
// import wechat from "../images/wechat.jpg";

const useStyles = makeStyles(() => ({
  depositContext: {
    flex: 1,
  },
  imageStyle: {
    width: "100%",
  },
  textStyle: {
    margin: "10px",
    textIndent: "25px",
    lineHeight: "30px",
  },
  titleStyle: {
    margin: "10px",
  },
}));

export default function Helper() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Qu'est-ce que c'est?</Title>
      <Typography variant="body2" align="left" className={classes.textStyle}>
     
      </Typography>
    </React.Fragment>
  );
}
