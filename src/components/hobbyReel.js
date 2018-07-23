import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography, GridList, GridListTile, GridListTileBar, Avatar } from '@material-ui/core/';

import SnowboarderImg from '../images/snowboarding.jpg'
import MountainsImg from '../images/mountains.jpg'
import PhysicsImg from '../images/physics.jpg'
import AncientCivImg from '../images/ancientCiv.jpg'

const styles = {
    root: {
        paddingTop: 20,
    },
    gridList: {
        width: '80vw',
        height: 300,
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    image: {
        height: 300,
        width: 300,
    },
    tile: {
        marginRight: 5,
    },
    title: {
        color: 'white',
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}

class HobbyReel extends React.Component {
    render() {

        const { classes } = this.props

        const hobbies = [
            {
                title: 'Snowboarding',
                img: SnowboarderImg,
            },
            {
                title: 'Camping / Hiking',
                img: MountainsImg,
            },
            {
                title: 'Physics',
                img: PhysicsImg,
            },
            {
                title: 'Ancient Cultures',
                img: AncientCivImg,
            },
        ]

        const HobbyTile = (props) => {
            return (
                <GridListTile className={classes.tile}>
                        <Avatar className={classes.image} src={props.img} alt='hobby_pic' />
                    <GridListTileBar
                        title={props.title}
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                    />
                </GridListTile>
            )
        }

        return (
            <div className={classes.root} >
                <Typography variant="display1" gutterBottom>Hobbies</Typography>
                <GridList className={classes.gridList} cols={2.5}>
                    {hobbies.map(h => (
                        <HobbyTile key={h.title} title={h.title} img={h.img} />
                    ))}
                </GridList>
            </div>
        );
    }
}

HobbyReel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HobbyReel)