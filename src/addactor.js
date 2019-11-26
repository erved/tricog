import React from 'react';
import {
    Slide,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    Grid,
    Radio,
    RadioGroup,
    FormControl,
    FormLabel,
    FormControlLabel
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';



function Transition(props) {
    return <Slide direction="up" {...props} />;
}


const AddActor = ({
    openActor,
    actorname,
    saveActorData,
    onChange,
    closeActorDialog
}) => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };
    const [value, setValue] = React.useState('male');

    const handleChange = event => {
        setValue(event.target.value);
    };
    return (
        <Dialog
            fullWidth
            open={openActor}
            onClose={() => { closeActorDialog() }}
            TransitionComponent={Transition}
        >
            <DialogTitle><u>Add Actor</u></DialogTitle>
            <DialogContent>

                <TextField
                    label="Actor Name"
                    margin="normal"
                    value={actorname}
                    name="actorname"
                    onChange={onChange}
                />
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date of Birth"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
            </DialogContent>
            <DialogActions>
                <Button color="secondary" onClick={closeActorDialog()}>Close</Button>
                <Button
                    color="primary"
                    onClick={saveActorData(actorname)}
                >Done</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddActor;
