import React from 'react';

export default class FilmItem extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        const { title, description, director, producer, releaseDate } = this.props
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
