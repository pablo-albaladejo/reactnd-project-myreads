import React from 'react';
import Loadable from 'react-loading-overlay';
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
    books: [],
    isLoading: false
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
      
    BooksAPI.getAll().then(books => {
      this.setState({
        isLoading: false
      });

      this.setState({
        books
      });
    });
  }

  changeShelf = (book, shelf) => {
    this.setState({
      isLoading: true
    });

    BooksAPI.update(book, shelf).then(response => {
      this.setState({
        isLoading: false
      });
      
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(item => item.id !== book.id).concat([book])
      }));
    });
  }


  render() {
    return (
      <div className="app">

        <Loadable
          animate
          active={this.state.isLoading}
        >
          <Route exact path='/' render={() => (
            <ListBooksComponent
              title="MyReads"
              shelves={this.shelves}
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )} />

          <Route exact path='/search' render={() => (
            <SearchBooksComponent 
              changeShelf={this.changeShelf}
            />
          )} />

        </Loadable>

      </div>
    )
  }
}

export default BooksApp;
