import React from 'react';
import {
    Slide,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button, Input, MenuItem, FormControl, Select, ListItemText, Checkbox, MenuProps, Fab
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';



function Transition(props) {
    return <Slide direction="up" {...props} />;
}


const AddNewMovie = ({
    saveData,
    closeDialog,
    open,
    name,
    year,
    plot,
    openActorDialog,
    onChange
}) => {
    const [personName, setPersonName] = React.useState([]);
    const names = [
        'Oliver Hansen',
        'Van Henry',
        'Tucker Jony'
    ];

    const handleChange = event => {
        setPersonName(event.target.value);
    };
    return (
        <Dialog
            fullWidth
            open={open}
            onClose={() => { closeDialog() }}
            TransitionComponent={Transition}
        >
            <DialogTitle><u>Add New Movie</u></DialogTitle>
            <DialogContent>

                <TextField
                    label="Movie Name"
                    margin="normal"
                    name="name"
                    value={name}
                    onChange={onChange}
                />
                <TextField
                    label="Year of Release"
                    margin="normal"
                    name="year"
                    value={year}
                    onChange={onChange}
                />
                <TextField
                    label="Plot"
                    margin="normal"
                    name="plot"
                    value={plot}
                    onChange={onChange}
                />

                <input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <div>
                    <FormControl>
                        <Select
                            multiple
                            value={personName}
                            onChange={handleChange}
                            input={<Input />}
                            renderValue={selected => selected.join(', ')}
                        >
                            {names.map(name => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={personName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>

                    </FormControl>
                    <Fab size="small" color="secondary">
                        <AddIcon onClick={openActorDialog()} />
                    </Fab>
                </div>
            </DialogContent>
            <DialogActions>
                <Button color="secondary" onClick={closeDialog()}>Close</Button>
                <Button
                    color="primary"
                    onClick={saveData(name, year, plot, personName)}
                >Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddNewMovie;
