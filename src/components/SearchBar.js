import React from 'react'

const URL = "https://www.googleapis.com/books/v1/volumes?q="

export default class SearchBar extends React.Component{


    state = {
        search: ""
    }

    handleOnChange = event => {
        event.persist()
        this.setState(prevState => {
           return {search: event.target.value}
        },
        )
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.searchBooks()
      }
     
    
    searchBooks(){
        fetch(URL + this.state.search + "&maxResults=20")
        .then(res => res.json())
        .then(books => {
            console.log(books, "books")
            this.props.updateResults(books.items)
        })
    }

    render(){
        return(
            <div id="search-bar-container">
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" id="search-bar" onChange={this.handleOnChange}/><input type="submit" id="submit-form"/>
                </form>
            </div>
        )
    }

}