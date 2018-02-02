import React, { Component } from 'react';
import BookshelfComponent from './BookshelfComponent';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class ListBooksComponent extends Component {

    state = {
        wantToRead: [],
        read: [],
        reading: []
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({
                wantToRead: books.filter(book => (book.shelf === "wantToRead")),
                read: books.filter(book => (book.shelf === "read")),
                reading: books.filter(book => (book.shelf === "currentlyReading"))
            });
        });
    }

    changeShelf(book, shelf) {
        BooksAPI.update(book, shelf).then(val => {
            console.log(val);
            //setState
        });
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookshelfComponent
                            title="Want to Read"
                            books={this.state.wantToRead}
                            changeShelf={this.changeShelf}
                        />
                    </div>
                    <div>
                        <BookshelfComponent
                            title="Read"
                            books={this.state.read}
                            changeShelf={this.changeShelf}
                        />
                    </div>
                    <div>
                        <BookshelfComponent
                            title="Currently Reading"
                            books={this.state.reading}
                            changeShelf={this.changeShelf}
                        />
                    </div>
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