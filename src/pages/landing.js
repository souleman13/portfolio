import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {Typography, } from '@material-ui/core/';

const styles = theme => ({
    root: {
        background: `url(https://s3.amazonaws.com/developwithsoule-files/images/mountains.jpg) no-repeat center center fixed`,
        backgroundSize: 'cover',
        height: '93vh',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        background: 'rgba(255,255,255,0.3)',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    catchyPhrase: {
        textAlign: 'center',
        margin: 20
    }
})

class Landing extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <div className={classes.box}>
                <Typography color='secondary' className={classes.catchyPhrase} variant="display4" gutterBottom>
                    Develop<br/>With<br/>Soule
                </Typography>
                </div>
            </div>
        )
    }
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Landing);