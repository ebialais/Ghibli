import React from 'react';

import axios from 'axios'; 
import FilmItem from './FilmItem';
import { Link } from 'react-router-dom';

export default class FilmList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            error: null, 
            isLoading: false
        };
    };

    componentDidMount() {
        axios.get(`https://ghibliapi.herokuapp.com/films/`)
        .then(
            res => {
                const films = res.data;
                this.setState({ 
                    isLoading: true,
                    films: films
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
        const { error, isLoading, films } = this.state;
        if ( error ) {
            return <h1>Erreur</h1>
        } else if ( !isLoading ) {
            return <h1>Is Loading</h1>
        } else {
            return (
                <div>
                    <h1>Les films</h1>
                    <ul>
                        { films.map((film) =>
                            <Link to={`/Films/${ film.id }`}>  
                                <FilmItem
                                    key={ film.id }
                                    id={ film.id }
                                    title={ film.title }
                                    description={ film.description }
                                    director={ film.director }
                                    producer={ film.producer }
                                    releaseDate={ film.release_date }
                                />
                            </Link>
                        )}
                    </ul>
                </div>
            )
        }
    }
}