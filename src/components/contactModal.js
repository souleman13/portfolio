import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { DialogTitle, Dialog, FormControl, InputLabel, Input, InputAdornment, TextField, Button } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

const styles = {
    dialog: {
        display: 'flex',
        flexFlow: 'column',
        width: 300,
        padding: 20,
    },
};

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
                    <FormControl>
                        <InputLabel htmlFor="input-name">Full Name</InputLabel>
                        <Input id="input-name"
                            onChange={e => this.handleChange('name', e.target.value)}
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            } />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="input-email">E-mail</InputLabel>
                        <Input id="input-email"
                            onChange={e => this.handleChange('email', e.target.value)}
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            } />
                    </FormControl>
                    <TextField
                        id="input-message"
                        label="Message"
                        multiline
                        rows="8"
                        onChange={e => this.handleChange('msg', e.target.value)}
                        margin="normal"
                    />
                    <Button className={classes.menuButton} onClick={()=>this.sendContact()} color="inherit">Send</Button>
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