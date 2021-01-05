import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";

export const mainListItems = (
  <div>
    <ListItem button component="a" href="https://nac-app.netlify.app">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Mode d'emploi" />
    </ListItem>
    <ListItem button component="a" href="https://nac-app.netlify.app">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="La description"  secondary="Comment ça fonctionne" />
    </ListItem>
  </div>
);

export const secondaryListItems = <div></div>;
