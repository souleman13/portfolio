import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import TestImg from '../images/circle.jpg'
import { Typography } from '../../node_modules/@material-ui/core';

const styles = theme => ({
    card: {
        minHeight: 150,
        width: 300,
        marginTop: 6,
    },
    row: {
        display: 'flex',
        flexFlow: 'row nowrap',
    },
    content: {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
    },
    media: {
        width: 150,
        height: 0,
        padding: 75, // 16:9
    },
    expand: {
        width: '100%',
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: 'red',
    },
    type: {
        textAlign: 'center',
    }
});

class SkillCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
            type: props.type,
            img: props.img,
            list: props.list,
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <div className={classes.row} >
                        <CardMedia
                            className={classes.media}
                            image={this.state.img}
                            title="Contemplative Reptile"
                        />
                        <CardContent className={classes.content} >
                                <Typography className={classes.type}>{this.state.type}</Typography>
                                <Button
                                    className={classnames(classes.expand, {
                                        [classes.expandOpen]: this.state.expanded,
                                    })}
                                    onClick={() => this.setState({ expanded: !this.state.expanded })}
                                    aria-expanded={this.state.expanded}
                                    aria-label="Show more"
                                >
                                    <ExpandMoreIcon />
                                </Button>
                        </CardContent>
                    </div>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <ul>
                                {this.state.list.map(skill => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        );
    }
}

SkillCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SkillCard);