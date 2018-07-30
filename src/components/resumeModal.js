import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { DialogTitle, Dialog, TextField, MenuItem, Button } from '@material-ui/core';
import DownloadIcon from '@material-ui/icons/FileDownload';

import ResumeDocx from '../files/resume.docx'
import ResumePdf from '../files/resume.pdf'
import PagesPdf from '../files/resume.pages'

const styles = theme => ({
    dialog: {
        display: 'flex',
        flexFlow: 'column',
        width: 300,
        padding: 20,
    },
    selector: {

    },
    option: {

    },
    submit: {

    }
})

class ResumeModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            docType: ''
        }
    }
    handleDownload() {
        console.log(`${this.state.docType} download!`)
    }
    render() {
        const { classes, onClose, open } = this.props;
        return (
            <Dialog open={open} onClose={onClose} aria-labelledby="dialog-title">
                <DialogTitle id="dialog-title">Resume Download</DialogTitle>
                <div className={classes.dialog}>
                    <TextField
                        select
                        label="Select Doc Type"
                        className={classes.selector}
                        value={this.state.docType}
                        onChange={e => this.setState({ docType: e.target.value })}
                        SelectProps={{
                            MenuProps: {
                                className: classes.option,
                            },
                        }}
                        helperText="Please select your document type"
                        margin="normal"
                    >
                        <MenuItem value={ResumeDocx}>
                            Word (.docx)
                        </MenuItem>
                        <MenuItem value={ResumePdf}>
                            PDF
                        </MenuItem>
                        <MenuItem value={PagesPdf}>
                            Mac (.pages)
                        </MenuItem>
                    </TextField>
                    <Button
                        className={classes.submit}
                        href={this.state.docType}
                        download="Doug_Soule_Resume"
                        color="secondary"
                    >
                        <DownloadIcon />
                    </Button>
                </div>
            </Dialog>
        );
    }
}

ResumeModal.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired
};

export default withStyles(styles)(ResumeModal);