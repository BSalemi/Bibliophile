import React from 'react';
import Book from '../components/Book.js'

export default class BooksContainer extends React.Component{
    

    generateBooks = () => {
        const books = this.props.results.map((bookObj, key) => {
            console.log(bookObj.volumeInfo.categories, "bookObj categories")
            return <Book key={bookObj.id} title={bookObj.volumeInfo.title} author={bookObj.volumeInfo.authors} categories={bookObj.volumeInfo.categories} image={bookObj.volumeInfo.imageLinks.thumbnail} link={bookObj.volumeInfo.infoLink} description={bookObj.volumeInfo.description} maturityRating={bookObj.volumeInfo.maturityRating} averageRating={bookObj.volumeInfo.averageRating}/>
        })
        return books
    }

    render(){
        console.log(this.props, "props in books container")
        return(
            <div id="books-container">
               {this.props.results.length > 0 && <h2 id="books-list">Books List:</h2>}
               {this.generateBooks()}
            </div>
        )
    }
}