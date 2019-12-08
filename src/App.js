import React from 'react';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';
import BooksContainer from './containers/BooksContainer'

import './App.css';

export default class App extends React.Component{
  render(){
    return(
      <div id="app">
        <SearchBar/>
        <SideBar/>
        <BooksContainer/>
      </div>
    )
  }
}


