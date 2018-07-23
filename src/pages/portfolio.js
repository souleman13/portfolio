import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography, GridList, GridListTile, Avatar } from '@material-ui/core/';

import ProjectReel from '../components/projectReel'
import HobbyReel from '../components/hobbyReel'
import ProfilePic from '../images/profilepic.jpeg'

const styles = {
    root: {
        paddingTop: 50,
        paddingBottom: 25,
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
    },
    profile: {
        width: '80vw',
    },
    pPic: {
        height: '100%',
        width: '100%',
    },
    description: {
        display: 'flex',
        flexFlow: 'column nowrap',
    },
    textblock: {
        paddingLeft: 10,
    }
}

class Portfolio extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root} >
                <GridList className={classes.profile} cellHeight={300} cols={3} >
                    <GridListTile cols={1} >
                        <Avatar className={classes.pPic} src={ProfilePic} alt='profile_pic' />
                    </GridListTile>
                    <GridListTile className={classes.description} cols={2} >
                        <Typography className={classes.textblock} variant="display1" gutterBottom>Souleman</Typography>
                        <Typography className={classes.textblock} variant="display1" gutterBottom>
                            I am an out going individual that loves to spend a lot of spare time enjoying nature. My favorite coding solutions help make unify and add positive value to the world around me.
                        </Typography>
                    </GridListTile>
                </GridList>
                <ProjectReel />
                <HobbyReel />
            </div>
        )
    }
}

Portfolio.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Portfolio)