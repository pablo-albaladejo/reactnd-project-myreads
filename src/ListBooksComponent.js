import React, { Component } from 'react';
import BookshelfComponent from './BookshelfComponent';
import { Link } from 'react-router-dom';

class ListBooksComponent extends Component {

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="list-books-content">
                    {this.props.shelves.map(shelve => (
                        <div key={shelve.id}>
                            <BookshelfComponent
                                title={shelve.title}
                                shelf={shelve.id}
                                books={this.props.books}
                                changeShelf={this.props.changeShelf}
                            />
                        </div>
                    ))}
                </div>

                <div className="open-search">
                    <Link
                        to='/search'
                        className='open-search'
                    >Add a book</Link>
                </div>
            </div >
        );
    };
}
export default ListBooksComponent;