import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  printHelperArea: {
    padding: "20px",
  },
  textStyle: {
    margin: "10px",
    textIndent: "25px",
    lineHeight: "30px",
  },
  titleStyle: {
    margin: "10px",
  },
  imageStyle: {
    margin: "20px",
    width: "80%",
  },
}));

export default function Welcome() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div>
        <Container maxWidth="lg" className={classes.printHelperArea}>
        </Container>
      </div>
    </React.Fragment>
  );
}
