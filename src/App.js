import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage';
import BookShelves from './BookShelves'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    query: '',
    searchedBooks:[]
  }

updateData(){
  BooksAPI.getAll().then((books) => {
    this.setState({books})
  })
}

componentDidMount(){
    this.updateData();
  }

updateOptions = (book, shelf) => {
  BooksAPI.update(book, shelf)
  .then(
    this.updateData()
    )
}

handleQuery = (query)=> {
  //indicates that there is a text
  if(query){
    this.setState({
      query: query
    });
    console.log(query)
  }
}

searchBook = (query) => {
  BooksAPI.search(query)
  .then()
}

render() {
  let {books, query} = this.state;
  return (
    <div className="app">

      <Route exact path='/'
        render= {() => (
          <BookShelves
          books = {books}
          selectOptions = {this.updateOptions}
          />
        )}
      />

      <Route path = '/search'
        render = {() => (
          <SearchPage
          searchedText = {query}
          />
        )}
      />

    </div>
    )
  }
}


export default BooksApp
