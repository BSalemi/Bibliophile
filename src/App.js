import React from 'react';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';
import BooksContainer from './containers/BooksContainer'
import SignUp from './components/SignUp';
import Login from './components/Login';
import Header from './components/Header';
import Logout from './components/Logout'

import './App.css';

export default class App extends React.Component{

  state = {
    results: []
  }

  updateResults = (searchResults) => {
    this.setState({results: searchResults},)
    console.log(this.state.results, "results")
    
  }

  render(){
    return(
      <div id="app">
        <Header/>
        <SearchBar updateResults={this.updateResults}/>
        <Logout/>
        <SideBar/>
        <BooksContainer results={this.state.results}/>
      </div>
    )
  }
}


