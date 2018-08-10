import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleAppBar(props) {
  const { classes } = props;
  const { Title } = props;
  return (

    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#8bc34a" }} >
        <Toolbar>
          <Typography variant="title" color="inherit">
            {Title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div >

  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);