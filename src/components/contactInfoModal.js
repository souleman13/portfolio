import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { DialogTitle, Dialog, FormControl, InputLabel, Input, InputAdornment, TextField, Button, Typography } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

const styles = theme => ({
    dialog: {
        display: 'flex',
        flexFlow: 'column',
        width: 300,
        padding: 20,
    },
})

class ContactModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            msg: '',
        }
    }
    handleChange(key, value) {
        this.setState({
            [key]: value,
        })
    }
    sendContact() {
        alert('Thanks for Contacting!')
        this.props.onClose()
    }
    render() {
        const { classes, onClose, open } = this.props;
        return (
            <Dialog open={open} onClose={onClose} aria-labelledby="dialog-title">
                <DialogTitle id="dialog-title">Contact Me</DialogTitle>
                <div className={classes.dialog}>
                    <Typography variant='body1' >Souleman13@gmail.com</Typography>
                    <br />
                    <Typography variant='body1' >Please feel free to e-mail me anytime!</Typography>
                </div>
            </Dialog>
        );
    }
}

ContactModal.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired
};

export default withStyles(styles)(ContactModal);