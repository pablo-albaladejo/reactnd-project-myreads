import React from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom'
import ListBooksComponent from './ListBooksComponent';
import SearchBooksComponent from './SearchBooksComponent';

class BooksApp extends React.Component {

  shelves = [
    {
      id: 'wantToRead',
      title: 'Want to Read'
    },
    {
      id: "read",
      title: "Read"
    },
    {
      id: "currentlyReading",
      title: "Currently Reading"
    }
  ];

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      });
    });
  }

  changeShelf = ( book, shelf ) => {
    BooksAPI.update(book, shelf).then(response => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(item => item.id !== book.id).concat([ book ])
      }));
    });
  }


  render() {
    return (
      <div className="app">

        <Route exact path='/' render={() => (
          <ListBooksComponent
            title="MyReads"
            shelves={this.shelves}
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )} />

        <Route exact path='/search' render={() => (
          <SearchBooksComponent />
        )} />

      </div>
    )
  }
}

export default BooksApp;
