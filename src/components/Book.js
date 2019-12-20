import React from 'react';

export default class Book extends React.Component{
    
    render(){
        console.log(this.props.author, "author")
        return(
            <div>
               <img alt="book" src={this.props.image}/>
               <h4><a href={this.props.link}>{this.props.title}</a></h4>
               {this.props.author.length > 1} ? {this.props.author.join(", ")} : {this.props.author}}  <em>{this.props.genre}</em>
            </div>
        )
    }
}