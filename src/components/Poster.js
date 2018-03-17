import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Poster extends Component {
    constructor(props){
        super(props);
        this.state = {
            poster: [],
        };
    }

    componentDidMount() {
        console.log(this.props.match.params);
        const byurl = 'https://hacker-news.firebaseio.com/v0/user/';
        fetch(byurl+this.props.match.params.by+'.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                var date = new Date((data.created*1000));
                data.created=date.toString();
                this.setState({ poster: data });
                console.log(data);
            })
    }

    render() {
        const { poster } = this.state;
        return ( 
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{poster.id}</span>
                        <p align="left">
                            Karma: {poster.karma}
                            <br/>
                            Created: {poster.created}
                            <br/>
                        </p>
                    </div>
                    <div className="card-action">
                        <Link to="/">Back to newslist </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Poster;