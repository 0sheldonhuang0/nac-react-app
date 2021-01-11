import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Markdown from "./Markdown";
// import wechat from "../images/wechat.jpg";

const useStyles = makeStyles(() => ({
  textStyle: {
    margin: "5px",
    textIndent: "30px",
    lineHeight: "30px",
    textAlign: "justify",
  	textJustify: "inter-ideograph"
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
      <div className={classes.textStyle}>
        <Markdown>MdAboutIndex</Markdown>
      </div>
    </React.Fragment>
  );
}
