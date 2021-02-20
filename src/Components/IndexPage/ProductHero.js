import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import IndexImg01 from "../../images/index_img_1.jpg";

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${IndexImg01})`,
    backgroundPosition: "center",
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={IndexImg01}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Toujours avec votre NAC
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        une application innovante pour mesurer et influer sur l'activité
        physique des NAC
      </Typography>
      <Button
        color="primary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/espace"
      >
        Commencez !
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Cliquez sur le bouton ci-dessus et essayez maintenant !
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
