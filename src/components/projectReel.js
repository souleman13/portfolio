import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography, GridList, GridListTile, GridListTileBar, IconButton, Avatar } from '@material-ui/core/';
import GridIcon from '@material-ui/icons/Visibility';

import GithubImg from '../images/github.png'
import BitbucketImg from '../images/bitbucket.jpg'

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

class ProjectReel extends React.Component {
    render() {
        const { classes } = this.props

        const projects = [
            {
                title: 'Portfolio',
                link: 'https://github.com/souleman13/portfolio',
                img: GithubImg,
            },
            {
                title: 'Zift Payment Adapter',
                link: 'https://bitbucket.org/Souleman13/zift-adapter/src/master/',
                img: BitbucketImg,
            },
            {
                title: 'Bar-App',
                link: 'https://github.com/souleman13/Bar-App',
                img: GithubImg,
            },
            {
                title: 'React-Apollo-Boilerplate',
                link: 'https://github.com/souleman13/react-apollo-boilerplater_with_comments',
                img: GithubImg,
            },
        ]

        const ProjectTile = (props) => {
            return (
                <GridListTile className={classes.tile}>
                    <Avatar className={classes.image} src={props.img} alt='hobby_pic' />
                    <GridListTileBar
                        title={props.title}
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        actionIcon={
                            <IconButton href={props.link} target='_blank'>
                                <GridIcon className={classes.title} />
                            </IconButton>
                        }
                    />
                </GridListTile>
            )
        }

        return (
            <div className={classes.root} >
                <Typography variant="display1" gutterBottom>Personal Projects</Typography>
                <GridList className={classes.gridList} cols={2.5}>
                    {projects.map(p => (
                        <ProjectTile key={p.title} link={p.link} title={p.title} img={p.img} />
                    ))}
                </GridList>
            </div>
        );
    }
}

ProjectReel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectReel)