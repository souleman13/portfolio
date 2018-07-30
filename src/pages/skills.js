import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import GolangImg from '../images/golang.png'
import MatrixImg from '../images/matrix.jpg'
import ConstructionImg from '../images/construction.jpeg'
import CssImg from '../images/css.png'
import DatabaseImg from '../images/database.jpg'
import GitImg from '../images/git.png'
import NpmImg from '../images/npm.png'
import ScrumImg from '../images/scrum.png'


import SkillCard from '../components/skillCard'

const styles = theme => ({
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
})

class Skills extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { classes } = this.props

        const skills = [
            {
                type: 'Languages',
                img: MatrixImg,
                list: [
                    'JavaScript / Node.js',
                    'Go / golang',
                ]
            },
            {
                type: 'Build Enviornments',
                img: ConstructionImg,
                list: [
                    'Docker',
                    'Webpack + Babel',
                ]
            },
            {
                type: 'Npm Libraries',
                img: NpmImg,
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
                img: GolangImg,
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
                type: 'Style Libraries',
                img: CssImg,
                list: [
                    'JSS',
                    'Semantic-ui',
                    'Material-ui',
                    'Bootstrap',
                    'SCSS',
                    'SaSS',
                    'LESS',
                ]
            },
            {
                type: 'Databases',
                img: DatabaseImg,
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
                img: ScrumImg,
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
                img: GitImg,
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