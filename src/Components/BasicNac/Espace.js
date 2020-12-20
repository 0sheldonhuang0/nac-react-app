import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux"; //新版里导入useDispatch和useSeletor

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
}));

export default function Preview() {
  const classes = useStyles();

  const format = useSelector((state) => state.format);
  //获取reducer上的数据
  console.log(format.format);

  return (
    <React.Fragment>
      <div>
        <Container maxWidth="lg">
        </Container>
      </div>
    </React.Fragment>
  );
}
