import React from "react";
import ReactMarkdown from "react-markdown";
import { makeStyles } from "@material-ui/core/styles";
import MdAbout from "../Docs/about.md";
import MdUserGuide from "../Docs/user_guide.md";

const useStyles = makeStyles(() => ({
  textStyle: {
    margin: "5px",
    textIndent: "5px",
    lineHeight: "30px",
    textAlign: "left",
  },
}));

export default function Markdown(fileName) {
  const classes = useStyles();
  const [text, setText] = React.useState("");
  // 读取文件
  const fileOpen = (MdFile) => {
    console.log(MdFile);
    fetch(MdFile)
      .then((res) => res.text())
      .then((text) => {
        console.log(text);
        setText(text);
      });
  };
  // 根据fileName读取文件
  const chooseFile = (fileName) => {
    switch (fileName.children) {
      case "MdAbout":
        fileOpen(MdAbout);
        break;
      case "MdUserGuide":
        fileOpen(MdUserGuide);
        break;
      default:
        fileOpen(MdAbout);
        break;
    }
  };

  return (
    <React.Fragment>
      {chooseFile(fileName)}
      <div className={classes.textStyle}>
        <ReactMarkdown source={text} />
      </div>
    </React.Fragment>
  );
}
