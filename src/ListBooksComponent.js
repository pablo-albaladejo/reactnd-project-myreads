import React, { Component } from 'react';
import BookshelfComponent from './BookshelfComponent'
class ListBooksComponent extends Component {
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
                        />
                    </div>
                    <div>
                        <BookshelfComponent
                            title="Read"
                        />
                    </div>
                    <div>
                        <BookshelfComponent
                            title="Currently Reading"
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