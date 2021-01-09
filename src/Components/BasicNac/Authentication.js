import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector } from "react-redux";
const AuthInput = React.lazy(() => import("./AuthInput"));
const AuthSuccess = React.lazy(() => import("./AuthSuccess"));

// Initiale
const useStyles = makeStyles(() => ({
  buttonArea: {
    margin: "0 10px 10px 10px",
  },
  root: {
    flexGrow: 1,
    display: "flex",
  },
  paper: {
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  formLabel: {
    padding: "0 0 10px 0",
    textAlign: "left",
  },
  inputEmpty: {
    margin: "0 0 15px 0",
  },
  img: {
    maxWidth: "100%",
    height: "auto",
  },
}));

export default function Setup() {
  const classes = useStyles();

  const userInfo = useSelector((state) => state.userInfo);
  //获取reducer上的数据
  console.log(userInfo);

  return (
    <div className={classes.root}>
      <React.Suspense
        fallback={
          <div>
            <CircularProgress />
          </div>
        }
      >
        {userInfo.name === undefined ? (
          <AuthInput></AuthInput>
        ) : (
          <AuthSuccess></AuthSuccess>
        )}
      </React.Suspense>
    </div>
  );
}
