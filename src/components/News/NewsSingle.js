import React from 'react';
import { Link } from 'react-router-dom';

const NewSingle = ({item}) => (
        <div className="col s12 m6">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{item.title}</span>
                    <p align="left"> 
                            <Link to={`/poster/${item.by}`}> Poster: {item.by} </Link>
                    <br/>
                        <small>
                            Date: {item.time}
                            <br/>
                            Karma: {item.score} 
                        </small>
                    </p>
                </div>
                <div className="card-action">
                <a target="_blank" href={item.url}>Link to the article </a>
                </div>
            </div>
        </div>
);

export default NewSingle;