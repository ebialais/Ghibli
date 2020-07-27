import React from 'react';

import { Link } from 'react-router-dom';

export default class FilmItem extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        const { id, title, description, director, producer, releaseDate } = this.props
        return (
            
            <Link to={`/Films/${ id }`}>
                <h1>{ title }</h1>
                {/* <p>{ description }</p>
                <p>{ director }</p>
                <p>{ producer }</p> */}
                <p>{ releaseDate }</p>
            </Link>
        )
    }
}
