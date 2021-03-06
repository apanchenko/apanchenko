import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import list from './list.js';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <Link to={'/' + this.props.entry.path + '/'}>
                    <h3 className="title">{this.props.entry.title}</h3>
                    <Image src={'min/' + this.props.entry.path + '.jpg'} alt={this.props.entry.imgalt} />
                </Link>
            </div>
        );
    }
};

export default class CardList extends React.Component {
    constructor(props) {
        super(props);

        var keys = Object.keys(list);
        var items = [];
        for (var i = 0; i < keys.length - 1;)
        {
            var key1 = keys[i++];
            var key2 = keys[i++];
            items.push(
                <div className="row">
                    <div className="col-md-6">
                        <Card  key={key1} entry={list[key1]} />
                    </div>
                    <div className="col-md-6">
                        <Card  key={key2} entry={list[key2]} />
                    </div>
                </div>
            )
        }

        this.state = { items: items };
    }

    render() {
        return ( this.state.items );
    }
};