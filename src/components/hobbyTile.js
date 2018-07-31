import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography, GridListTile, GridListTileBar, Avatar, IconButton } from '@material-ui/core/'
import classnames from 'classnames';
import GridIcon from '@material-ui/icons/Visibility'

const styles = theme => ({
    links: {
        backgroundColor: theme.palette.secondary.main,
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
})

class HobbyTile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showMore: false,
            img: props.img,
            title: props.title,
            links: props.links,
        }
    }

    render() {

        const { classes } = this.props
        
        return (
            <GridListTile className={classes.tile}>
                {/* <Avatar className={classes.image} src={this.state.img} alt='hobby_pic' /> */}
                {
                    this.state.showMore ?
                        <Avatar className={classnames(classes.image, classes.links)}>
                            <ul>
                                {this.state.links.map(l => (<li key={l.name}><Typography color='primary' variant='title'><a href={l.link} target='_blank' >{l.name}</a></Typography></li>))}
                            </ul>
                        </Avatar> : <Avatar className={classes.image} src={this.state.img} alt='hobby_pic' />
                }
                <GridListTileBar
                    title={this.state.title}
                    classes={{
                        root: classes.titleBar,
                        title: classes.title,
                    }}
                    actionIcon={
                        <IconButton onClick={e => this.setState({ showMore: !this.state.showMore })} target='_blank'>
                            <GridIcon className={classes.title} />
                        </IconButton>
                    }
                />
            </GridListTile>
        )
    }
}

HobbyTile.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HobbyTile)