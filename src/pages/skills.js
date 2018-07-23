import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core/'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


const styles = {
    root: {
        paddingTop: 20,
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignContent: 'center',
    },
    title: {
        width: 250,
    },
}

class Skills extends React.Component {
    render() {
        const { classes } = this.props

        const skills = [
            {
                type: 'computer languages',
                list: [
                    'JavaScript / Node.js',
                    'Go / golang',
                ]
            },
            {
                type: 'Build Enviornments / Processes',
                list: [
                    'Docker',
                    'Webpack + Babel',
                ]
            },
            {
                type: 'Npm libraries',
                list: [
                    'React',
                    'Webpack',
                    'Babel',
                    'Angular',
                    'Express',
                    'Graphql',
                    'Apollo',
                    'Redux',
                ]
            },
            {
                type: 'golang packages',
                list: [
                    'database/sql',
                    'sqlmock',
                    'testing',
                    'io',
                    'reflect',
                    'fmt',
                ]
            },
            {
                type: 'CSS libraries / frameworks',
                list: [
                    'Semantic-ui',
                    'Material-ui',
                    'Bootstrap',
                    'SCSS / SaSS',
                    'LESS',
                ]
            },
            {
                type: 'Databases',
                list: [
                    'snowflakeDB',
                    'Amazon Web Services(AWS): S3, DynamoDB',
                    'Microsoft: AzureSQL',
                    'Google: bigQuery',
                    'mongoDB',
                    'SQL',
                ]
            },
            {
                type: 'Development Strategy / Agile Methodology',
                list: [
                    'JIRA',
                    'SCRUM',
                    'Kanban',
                    'Trunk Based Development',
                    'Continuous Integration / Delivery (CICD)',
                    'Remote',
                ]
            },
            {
                type: 'Source Control / Code Clouds',
                list: [
                    'Git',
                    'Github',
                    'Bitbucket',
                ]
            },
        ]

        const SkillPanel = (props) => {
            return (
                <ExpansionPanel className={classes.title} >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>{props.type}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ul>
                        {props.list.map(skill =>(
                            <li key={skill}>{skill}</li>
                        ))}
                        </ul>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            )
        }

        return (
            <div className={classes.root} >
                {skills.map(s => (<SkillPanel key={s.type} type={s.type} list={s.list} />))}
            </div>
        )
    }
}

Skills.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Skills)