import React from 'react';

export default class Book extends React.Component{
    
    render(){
        console.log(this.props.author, "author")
        return(
            <div>
                {this.props.image && <img alt="book" src={this.props.image}/>}
               <h4><a href={this.props.link}>{this.props.title}</a></h4>
               {this.props.author && this.props.author.join(", ")} <em>{this.props.genre}</em>
            </div>
        )
    }
}