import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { DialogTitle, Dialog, FormControl, InputLabel, Input, InputAdornment, TextField, Button } from '@material-ui/core'
import { AccountCircle, PermPhoneMsg, Email } from '@material-ui/icons'



const styles = theme => ({
    dialog: {
        display: 'flex',
        flexFlow: 'column',
        width: 300,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
    },
    icon: {
        color: theme.palette.secondary.main,
    },
    button: {
        color: theme.palette.primary.main,
    }
})

class ContactModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            msg: '',
            phone: 0,
        }
    }
    handleChange(key, value) {
        this.setState({
            [key]: value,
        })
    }

    validateEmail() {
        //check email
        if (this.state.email == '' && this.state.email.includes('@') && this.state.email.includes('.')) {
            alert('Please Enter a Valid E-mail')
            return false
        }
        //check name
        if (this.state.name == '' && this.state.name.length >= 2) {
            alert('Please Enter a Full Name')
            return false
        }
        //check phone
        if (this.state.phone == 0 && this.state.phone.toString().length < 10) {
            alert('Please Enter a 10 digit phone number')
            return false
        }
        //check msg
        if (this.state.msg == '') {
            alert('Please Enter Message')
            return false
        }
        return true
    }

    sendContact() {
        if (this.validateEmail()) {
            var template_params = {
                "reply_to": this.state.email,
                "from_name": this.state.name,
                "phone": this.state.phone,
                "message": this.state.msg,
            }
            var service_id = "default_service"
            var template_id = "portfolio_contact"
            emailjs.send(service_id, template_id, template_params)
            alert('Success! Thanks for Contacting!')
            this.props.onClose()
        }
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
                            placeholder='Slim Shady'
                            onChange={e => this.handleChange('name', e.target.value)}
                            classes={{
                                underline: classes.underline,
                              }}
                            startAdornment={
                                <InputAdornment className={classes.icon} position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            } />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="input-email">E-mail</InputLabel>
                        <Input id="input-email"
                            placeholder='no-reply@company.com'
                            onChange={e => this.handleChange('email', e.target.value)}
                            startAdornment={
                                <InputAdornment className={classes.icon} position="start">
                                    <Email />
                                </InputAdornment>
                            } />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="input-phone">Phone</InputLabel>
                        <Input id="input-phone"
                            placeholder='(369)8675-309'
                            type='number'
                            onChange={e => this.handleChange('phone', e.target.value)}
                            startAdornment={
                                <InputAdornment className={classes.icon} position="start">
                                    <PermPhoneMsg />
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
                    <Button className={classes.button} onClick={() => this.sendContact()} color="inherit">Send</Button>
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