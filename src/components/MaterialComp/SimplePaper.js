import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
    },
    // paper: {

    // }
});

class SimplePaper extends Component {
    render = () => {
        const { classes } = this.props
        const { color } = this.props
        return (
            <div>
                <Paper className={classes.root} style={{ background: color }} elevation={6}>
                    {this.props.children}
                </Paper>
            </div >
        )
    }
}

SimplePaper.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimplePaper);