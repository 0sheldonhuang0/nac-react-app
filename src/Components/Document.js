import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MainListItems, {secondaryListItems } from "./listItems";
import Helper from "./Helper";
import Steps from "./BasicNac/Steps";
import Welcome from "./BasicNac/Welcome";
import nacIcon72 from "../images/nac-icon-72.png";
import logoAM84 from "../images/logo-am-84.png";
import Markdown from "./Markdown";

function Copyright() {
  const classes = useStyles();
  return (
    <div>
    <div>
      <Typography variant="overline" color="textSecondary" align="center">
        {"Etudiants : "}
        <Link color="inherit" href="https://xd.sh.cn/">
          HUANG Xiaodong
        </Link>
        {" & LIU Huimin | Directeur : JEAN Camille"}
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        <Link color="inherit" href="https://nac-app.netlify.app">
          Conception d'une application innovante pour mesurer et influer sur
          l'activité physique des NAC
        </Link>
      </Typography>
      <img src={logoAM84} alt="AM-logo" className={classes.imageStyle} />
    </div>
    </div>
  );
}

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  imageStyle: {
    margin: "10px",
    height: "25px",
  },
  paper: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 550,
  },
}));

export default function Document(fileName) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon /> {/*菜单图标*/}
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {/*这里是标题*/}
            Toujours avec votre NAC
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List><MainListItems/></List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* 制作你的卡片集 */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={classes.paper}>
                  {console.log(fileName.children)}
                <Markdown>{fileName.children}</Markdown>
              </Paper>
            </Grid>
            {/* 侧栏：这是什么？ */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={classes.paper}>
                <Helper />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
