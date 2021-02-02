import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import PetsIcon from "@material-ui/icons/Pets";
import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function MainListItems() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <ListItem button component="a" href="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Accueil" />
      </ListItem>
      <ListItem button component="a" href="/espace">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Mon espace" />
      </ListItem>
      <ListItem button component="a" href="/user-guide">
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Mode d'emploi" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText
          primary="Les documents"
          secondary="Comment ça fonctionne"
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            component="a"
            href="/nac-python-gui"
            className={classes.nested}
          >
            <ListItemIcon>
              <DesktopWindowsIcon />
            </ListItemIcon>
            <ListItemText primary="NAC Desktop App" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="/nac-react-app"
            className={classes.nested}
          >
            <ListItemIcon>
              <PhoneIphoneIcon />
            </ListItemIcon>
            <ListItemText primary="NAC Web App" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="/train-data"
            className={classes.nested}
          >
            <ListItemIcon>
              <PetsIcon />
            </ListItemIcon>
            <ListItemText primary="Personnalisation" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button component="a" href="/about">
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="À propos" />
      </ListItem>
    </div>
  );
}

export const secondaryListItems = <div></div>;
