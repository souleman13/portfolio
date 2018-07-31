import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography, GridList} from '@material-ui/core/';

import HobbyTile from './hobbyTile'

import SnowboarderImg from '../images/snowboarding.jpg'
import MountainsImg from '../images/mountains.jpg'
import PhysicsImg from '../images/physics.jpg'
import AncientCivImg from '../images/ancientCiv.jpg'

const styles = theme => ({
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
    paper: {
        height: 300,
        width: 300,
        borderRadius: '50%',
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
})

class HobbyReel extends React.Component {
    render() {

        const { classes } = this.props

        const hobbies = [
            {
                title: 'Snowboarding',
                img: SnowboarderImg,
                links:[
                    {
                        name: 'Brighton Resort',
                        link: 'http://www.brightonresort.com'
                    },{
                        name: 'SnowBird',
                        link: 'http://www.snowbird.com'
                    }
                ]
            },
            {
                title: 'Camping / Hiking',
                img: MountainsImg,
                links:[
                    {
                        name: 'Uinta-Wasatch-Cache',
                        link: 'https://www.fs.usda.gov/main/uwcnf/home'
                    },{
                        name: 'Ashley National Forest',
                        link: 'https://www.fs.usda.gov/main/ashley/home'
                    },{
                        name: 'Zion Nation Park',
                        link: 'https://www.nps.gov/zion/index.htm'
                    },{
                        name: 'Canyonlands',
                        link: 'https://www.nps.gov/cany/index.htm'
                    },
                    {
                        name: 'Arches',
                        link: 'https://www.nps.gov/arch/index.htm'
                    },
                    {
                        name: 'Bryce Canyon',
                        link: 'https://www.nps.gov/brca/index.htm'
                    },
                ]
            },
            {
                title: 'Physics',
                img: PhysicsImg,
                links:[
                    {
                        name: 'Neil deGrasse Tyson',
                        link: 'http://www.haydenplanetarium.org/tyson/'
                    },{
                        name: 'Vibration Science',
                        link: 'https://www.britannica.com/science/vibration'
                    },
                ]
            },
            {
                title: 'Ancient Cultures',
                img: AncientCivImg,
                links:[
                    {
                        name: 'Gaia',
                        link: 'https://www.gaia.com'
                    },
                    {
                        name: 'Egypt',
                        link: 'https://www.history.com/topics/ancient-history/ancient-egypt'
                    }
                ]
            },
        ]

        return (
            <div className={classes.root} >
                <Typography variant="display1" gutterBottom>Hobbies</Typography>
                <GridList className={classes.gridList} cols={2.5}>
                    {hobbies.map(h => (
                        <HobbyTile key={h.title} title={h.title} img={h.img} links={h.links} />
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