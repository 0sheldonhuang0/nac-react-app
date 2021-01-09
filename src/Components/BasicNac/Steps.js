import React, { useState, useEffect }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Stepbar from "./Stepbar";
import Setup from "./Authentication";
import Espace from "./Espace.js";
import Welcome from "./Welcome.js";
import { useSelector,useDispatch } from "react-redux"; //新版里导入useDispatch和useSeletor
import ScrollToTop from "../ScrollToTop";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
require("firebase/auth");

function getSteps() {
  return ["Connecxion", "Votre espace"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "ETAPE 1";
    case 1:
      return "ETAPE 2";
    default:
      return "Unknown stepIndex";
  }
}

function getMainContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Setup />;
    case 1:
      return <Espace />;
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
  const [userInfo, setUserInfo] = React.useState({
    name: undefined,
    email: undefined,
    uid: undefined,
  });
  const steps = getSteps();

  const dispatch = useDispatch();
  const storeUserInfo = (userInfo) => {
    dispatch({
      type: "ADD_USERINFO",
      userInfo: userInfo,
    });
  };

  useEffect(() => {
    setUserInfo({ ...userInfo });
  }, []);
  // useEffect在组件mount时执行，但也会在组件更新时执行。
  // 因为我们在每次请求数据之后都会设置本地的状态，所以组件会更新，
  // 因此useEffect会再次执行，因此出现了无限循环的情况。
  // 我们只想在组件mount时请求数据。我们可以传递一个空数组作为useEffect的第二个参数，
  // 这样就能避免在组件更新执行useEffect，只会在组件mount时执行。

  const handleGetUserInfo = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        userInfo.name = user.providerData[0].displayName;
        userInfo.email = user.providerData[0].email;
        userInfo.uid = user.providerData[0].uid;
        storeUserInfo(userInfo);
        console.log(userInfo);
      } else {
        userInfo.name = undefined;
        userInfo.email = undefined;
        userInfo.uid = undefined;
        storeUserInfo(userInfo);
        console.log("Aucun utilisateur n'est connecté.");
      }
    });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const successedData = useSelector((state) => state.successedData);
  //获取reducer上的数据

  return (
    <React.Fragment>
      <div className={classes.root}>
      {handleGetUserInfo()}
      {console.log(userInfo)}

        <ScrollToTop />
        <Stepbar activeStep={activeStep} steps={steps} />
        <Grid className={classes.fixedHeight280}>
          {getMainContent(activeStep)}
        </Grid>
        <div className={classes.fixedHeight100}>
          {activeStep === steps.length - 1 ? (
            <div>
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
                  L'étape suivante
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
