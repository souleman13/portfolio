import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography, GridList, GridListTile, Avatar } from '@material-ui/core/';

import { GetPortfolio } from '../services/dynamoDB'
import ProjectReel from '../components/projectReel'
import HobbyReel from '../components/hobbyReel'

const styles = theme => ({
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
})

class Portfolio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nickname: '',
            desc: '',
            profilePic: ''
        }
    }
    componentDidMount(){
        GetPortfolio().then(r => {
            this.setState({
                nickname: r.nickname,
                desc: r.desc,
                profilePic: r.profilePic
            })
        })
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root} >
                <GridList className={classes.profile} cellHeight={300} cols={3} >
                    <GridListTile cols={1} >
                        <Avatar className={classes.pPic} src={this.state.profilePic} alt='profile_pic' />
                    </GridListTile>
                    <GridListTile className={classes.description} cols={2} >
                        <Typography className={classes.textblock} variant="display2">{this.state.nickname}</Typography>
                        <Typography className={classes.textblock} variant="headline">{this.state.desc}</Typography>
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