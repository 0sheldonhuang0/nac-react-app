import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux"; //新版里导入useDispatch和useSeletor
// import makeTxtFile3 from "../../images/makeTxtFile3.jpg";

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

  const dispatch = useDispatch();
  const storeSuccessedData = (uploadData) => {
    dispatch({
      type: "ADD_UPLOADSUCCESS",
      successedData: uploadData,
    });
  };

  return (
    <React.Fragment>
      <div>
        <Container maxWidth="lg" className={classes.printHelperArea}>
        </Container>
        {storeSuccessedData(true)}
      </div>
    </React.Fragment>
  );
}
