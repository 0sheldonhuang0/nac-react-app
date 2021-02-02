import React from "react";
import ReactMarkdown from "react-markdown";
import { makeStyles } from "@material-ui/core/styles";
import MdAbout from "../Docs/about.md";
import MdTrainData from "../Docs/train-data.md";
import MdAboutIndex from "../Docs/about-index.md";
import MdUserGuide from "../Docs/user-guide.md";
import MdNacPython from "../Docs/nac-python-gui.md";
import MdNacReact from "../Docs/nac-react-app.md";
import MdHelp1 from "../Docs/help-1.md";
import MdHelp2 from "../Docs/help-2.md";
import CodeBlock from "../Components/CodeBlock";

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
      case "MdHelp1":
        fileOpen(MdHelp1);
        break;
      case "MdHelp2":
        fileOpen(MdHelp2);
        break;
      case "MdAboutIndex":
        fileOpen(MdAboutIndex);
        break;
      case "MdTrainData":
        fileOpen(MdTrainData);
        break;
      case "MdUserGuide":
        fileOpen(MdUserGuide);
        break;
      case "MdNacPython":
        fileOpen(MdNacPython);
        break;
      case "MdNacReact":
        fileOpen(MdNacReact);
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
        <ReactMarkdown source={text} renderers={{ code: CodeBlock }} />
      </div>
    </React.Fragment>
  );
}
