import React from 'react'

const googleBooksUrl = "https://www.googleapis.com/books/v1/volumes?q="

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
        fetch(URL + this.state.search)
        .then(res => res.json())
        .then(books => {
            this.props.updateResults(books.items)
        })
    }

    render(){
        return(
            <div id="search-bar-container">
                <form id="search-bar" onSubmit={this.handleOnSubmit}>
                    <input type="text" name="search-bar" onChange={this.handleOnChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}