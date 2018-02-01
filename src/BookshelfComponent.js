import React, { Component } from "react";
import BookComponent from './BookComponent';

class BookshelfComponent extends Component {
    render() {
        const { books } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <li key={book.id}>
                                <BookComponent
                                    img={book.imageLinks.smallThumbnail}
                                    title={book.title}
                                    authors={book.authors}
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