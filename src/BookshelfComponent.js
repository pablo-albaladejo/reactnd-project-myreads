import React, { Component } from "react";
import BookComponent from './BookComponent';

class BookshelfComponent extends Component {
    render() {
        const { books, shelf, changeShelf } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.filter(book => book.shelf === shelf).map((book) => (
                            <li key={book.id}>
                                <BookComponent
                                    book={book}
                                    changeShelf={changeShelf}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}
export default BookshelfComponent