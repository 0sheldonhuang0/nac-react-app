import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Stepbar from "./Stepbar";
import Setup from "./Setup";
import Preview from "./Espace.js";
import Welcome from "./Welcome.js";
import { useSelector } from "react-redux"; //新版里导入useDispatch和useSeletor
import ScrollToTop from "../ScrollToTop";

function getSteps() {
  return ["Préparation", "Connecxion", "Votre espace"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "ETAPE 1";
    case 1:
      return "ETAPE 2";
    case 2:
      return "ETAPE 3";
    case 3:
      return "";
    default:
      return "Unknown stepIndex";
  }
}

function getMainContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Welcome />;
    case 1:
      return <Setup />;
    case 2:
      return <Setup />;
    case 3:
      return <Preview />;
    default:
      return "Unknown stepIndex";
  }
}

const useStyles = makeStyles(() => ({
  buttonArea: {
    margin: "0 10px 10px 10px",
  },
}));

export default function Ppmemo() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const successedData = useSelector((state) => state.successedData);
  //获取reducer上的数据

  return (
    <React.Fragment>
      <div className={classes.root}>
        <ScrollToTop />
        <Stepbar activeStep={activeStep} steps={steps} />
        <Grid className={classes.fixedHeight280}>
          {getMainContent(activeStep)}
        </Grid>
        <div className={classes.fixedHeight100}>
          {activeStep === steps.length ? (
            <div>
              <Button onClick={handleReset} variant="contained">
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <Typography variant="overline" className={classes.hintText}>
                {getStepContent(activeStep)}
              </Typography>
              <div className={classes.buttonArea}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  variant="contained"
                  className={classes.buttonArea}
                >
                  Retourer
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.buttonArea}
                  disabled={successedData === false}
                >
                  {activeStep === steps.length - 1 ? "OK" : "L'étape suivante"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
