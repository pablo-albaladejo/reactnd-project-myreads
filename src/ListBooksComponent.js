import React, { Component } from 'react';
import BookshelfComponent from './BookshelfComponent'
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
                wantToRead:  books.filter(book => (book.shelf === "wantToRead")),
                read: books.filter(book => (book.shelf === "read")),
                reading:  books.filter(book => (book.shelf === "currentlyReading"))
            });
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
                        />
                    </div>
                    <div>
                        <BookshelfComponent
                            title="Read"
                            books={this.state.read}
                        />
                    </div>
                    <div>
                        <BookshelfComponent
                            title="Currently Reading"
                            books={this.state.reading}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div >
        );
    };
}
export default ListBooksComponent;