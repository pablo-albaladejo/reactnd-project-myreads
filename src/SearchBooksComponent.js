import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import BookComponent from './BookComponent';

class SearchBooksComponent extends Component {

    query='';

    state = {
        books: [],
    }

    handleChange = event => {
        this.query = event.target.value.trim();

        if (this.query) {
            BooksAPI.search(this.query).then(response => {
                if (response.error) {
                    this.setState({
                        books: []
                    });
                } else {
                    this.setState({
                        books: response.map(item => {
                            //https://stackoverflow.com/a/38500417/3395884
                            //check if the current book is already in a self
                            let book = this.props.books.find(book => book.id === item.id);
                            return book || item;
                        })
                    });
                }
            });
        } else {
            this.setState({
                books: []
            });
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close-search' to='/'>Close</Link>
                    <div className="search-books-input-wrapper">

                        <input type="text" placeholder="Search by title or author" onKeyUp={this.handleChange}/>

                    </div>
                </div>
                <div className="search-books-results">
                    {this.query !== '' && (
                        <ol className="books-grid">
                            {this.state.books.map(book => (
                                <li key={book.id}>
                                    <BookComponent
                                        book={book}
                                        changeShelf={this.props.changeShelf}
                                    />
                                </li>
                            ))}
                        </ol>
                    )}
                    {this.state.books.length === 0 && this.query !== '' && (
                        <div>Search returned 0 books</div>
                    )}
                </div>
            </div>
        );
    }
}
export default SearchBooksComponent;