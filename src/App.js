import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import ListBooksComponent from './ListBooksComponent';
import SearchBooksComponent from './SearchBooksComponent';

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">

        <Route exact path='/' render={() => (
          <ListBooksComponent
            title="MyReads"
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
