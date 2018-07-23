import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import TestImg from '../images/circle.jpg'

import SkillCard from '../components/skillCard'

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
    constructor(props) {
        super(props)

    }
    render() {
        const { classes } = this.props

        const skills = [
            {
                type: 'Languages',
                img: TestImg,
                list: [
                    'JavaScript / Node.js',
                    'Go / golang',
                ]
            },
            {
                type: 'Build Enviornments',
                img: TestImg,
                list: [
                    'Docker',
                    'Webpack + Babel',
                ]
            },
            {
                type: 'Npm Libraries',
                img: TestImg,
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
                type: 'GoLang Packages',
                img: TestImg,
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
                type: 'CSS Libraries',
                img: TestImg,
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
                img: TestImg,
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
                img: TestImg,
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
                img: TestImg,
                list: [
                    'Git',
                    'Github',
                    'Bitbucket',
                ]
            },
        ]

        return (
            <div className={classes.root} >
                
                {skills.map(s => (
                    <SkillCard key={s.type} type={s.type} img={s.img} list={s.list} />
                ))}
            </div>
        )
    }
}

Skills.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Skills)