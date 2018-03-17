import React, { Component } from 'react';
import NewsSingle from './NewsSingle';

class NewsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }

    componentDidMount() {

        const baseUrl = 'https://hacker-news.firebaseio.com/v0/'
        const bestStories = 'beststories';
        const singleStory = 'item/';
        const suffix = '.json';
        console.log(this.state.news);
        fetch(baseUrl+bestStories+suffix)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                data = data.slice(1,21);
                return data;
            })
            .then((ids) => {
                let results = [];
                ids.forEach((id) => {
                    results.push(id);
                })
                ids.forEach((id) => {
                    fetch(baseUrl+singleStory+id+suffix)
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {
                            var date = new Date((data.time*1000));
                            data.time=date.toString();
                            this.setState({ news: [...this.state.news, data]});
                        })
                    })
                })
            .catch((error) => console.log('error'));

    }


    renderItems() {
        return this.state.news.map((item) => (
            <NewsSingle key={item.id} item={item} />
        ));
    }

    render() {
        return (
            <div className="Row">
            <ul>
                {this.renderItems()}
            </ul>
            </div>
        );
    }
}

export default NewsContainer;
