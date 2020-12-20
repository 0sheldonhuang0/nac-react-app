import React from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import {createMuiTheme, ThemeProvider, Button } from "@material-ui/core";

// 自定义主题，mu的默认主题参见
// https://material-ui.com/zh/customization/default-theme/
const theme = createMuiTheme({
  palette:{
    primary:{
      main:"#39C5BB",
      contrastText:"#fff"
    },
    secondary:{
      main:"#ffa990"
    }
  }
})

function App() {
  return (
    /*全局应用自定义主题 ThemeProvider*/
    <ThemeProvider theme={theme}>
      <div className="App">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;
