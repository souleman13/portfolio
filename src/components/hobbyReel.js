import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography, GridList} from '@material-ui/core/';

import HobbyTile from './hobbyTile'
import { GetHobby } from '../services/dynamoDB'

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
    constructor(props) {
        super(props)
        this.state = {
            hobbies: []
        }
        
    }
    componentDidMount(){
        GetHobby().then(r => {
            this.setState({hobbies: r})
        })
    }
    render() {

        const { classes } = this.props

        console.log(this.state.hobbies)

        return (
            <div className={classes.root} >
                <Typography variant="display1" gutterBottom>Hobbies</Typography>
                <GridList className={classes.gridList} cols={2.5}>
                    {this.state.hobbies.map(h => (
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