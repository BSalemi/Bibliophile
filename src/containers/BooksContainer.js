import React from 'react';
import Book from '../components/Book.js'

export default class BooksContainer extends React.Component{
    

    generateBooks = () => {
        const books = this.props.results.map((bookObj, key) => {
            return <div id="book-card"><Book index={bookObj.id} title={bookObj.volumeInfo.title} genre={bookObj.volumeInfo.categories} image={'imageLinks' in bookObj.volumeInfo ? bookObj.volumeInfo.imageLinks.thumbnail : null} link={bookObj.volumeInfo.infoLink} author={'authors' in bookObj.volumeInfo ? bookObj.volumeInfo.authors : null}/></div>
        })
        return books
    }

    render(){
        console.log(this.props, "props in books container")
        return(
            <div id="books-container">
               {this.generateBooks()}
            </div>
        )
    }
}