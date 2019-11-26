import React from 'react';
import MaterialTable from 'material-table';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import AddNewMovie from './addnewmovie';
import AddActor from './addactor';


export default class MovieTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            name: '',
            year: '',
            plot: '',
            cast: '',
            openActor: false,
            actorname: '',
            columns: [
                { title: 'name', field: 'name' },
                { title: 'year', field: 'year' },
                { title: 'plot', field: 'plot', },
                { title: 'cast', field: 'cast' },
            ],
            data: [
                { name: 'avengers', year: '2018', plot: 'avengers fakedata', cast: 'tom' },
                { name: 'mission impossible', year: '2018', plot: 'mission impossible fakedata', cast: 'smith' },
                { name: 'ghost stories', year: '2018', plot: 'ghoststories fakedata', cast: 'andy' },

            ]
        };
    }

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };

    saveData = (name, year, plot, personName) => {
        this.setState({ open: false })
        // this.setState({ data: this.state.data.push = { name: name, year: year, plot: plot, cast: personName } })
    }
    saveActorData = (actorname) => {
        console.log(actorname);
        this.setState({ openActor: false })
    }

    openActorDialog = () => {
        this.setState({ openActor: true })
    }

    closeActorDialog = () => {
        this.setState({ openActor: false })
    }

    closeDialog = () => {
        this.setState({ open: false })
    }

    addNewMovie = () => {
        this.setState({ open: true })
    }

    render() {
        console.log(this.state)

        return (
            <div>
                <MaterialTable
                    title={<Button onClick={() => this.addNewMovie()} variant="contained" color="secondary"><AddIcon /></Button>}
                    columns={this.state.columns}
                    data={this.state.data}
                    editable={{
                        onRowUpdate: (newData, oldData) =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    if (oldData) {
                                        this.setState(prevState => {
                                            const data = [...prevState.data];
                                            data[data.indexOf(oldData)] = newData;
                                            return { ...prevState, data };
                                        });
                                    }
                                }, 600);
                            }),
                    }}
                />
                <AddNewMovie
                    open={this.state.open}
                    name={this.state.name}
                    year={this.state.year}
                    plot={this.state.plot}
                    cast={this.state.cast}
                    onChange={this.onChange}
                    openActorDialog={() => this.openActorDialog}
                    closeDialog={() => this.closeDialog}
                    saveData={() => this.saveData} />
                <AddActor
                    openActor={this.state.openActor}
                    onChange={this.onChange}
                    actorname={this.state.actorname}
                    closeActorDialog={() => this.closeActorDialog}
                    saveActorData={() => this.saveActorData} />

            </div>
        );
    }
}

