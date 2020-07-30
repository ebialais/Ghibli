import React from 'react';

export default class FilmItem extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            film: [],
            error: null, 
            isLoading: false
        };
    }

    componentDidMount() {
        axios.get(`https://ghibliapi.herokuapp.com/films/`+${id}) // '${id} => faux voir comment recupérer l'id venant du router
        .then(
            res => {
                const film = res.data;
                this.setState({ 
                    isLoading: true,
                    film: film
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const { id, title, description, director, producer, releaseDate } = this.props
        return (
            <div>
                <h1>{ title }</h1>
                <p>{ description }</p>
                <p>{ director }</p>
                <p>{ producer }</p>
                <p>{ releaseDate }</p>
            </div>
        )
    }
}
