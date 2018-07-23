import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';


const styles = {}

class NotFound extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <Typography variant="display1" gutterBottom>
                The page you requested could not be located.
        </Typography>
        );
    }
}

NotFound.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFound);