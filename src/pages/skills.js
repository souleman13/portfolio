import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { GetSkills } from '../services/dynamoDB'
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
        this.state = {
            skills: []
        }
        
    }

    componentDidMount(){
        GetSkills().then(r => {
            this.setState({skills: r})
        })
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root} >
                {
                    this.state.skills.map(s => (
                    <SkillCard key={s.type} type={s.type} img={s.img} list={s.list} />
                ))
                }
            </div>
        )
    }
}

Skills.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Skills)