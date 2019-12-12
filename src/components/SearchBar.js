import React from 'react'

export default class SearchBar extends React.Component{
    render(){
        return(
            <div id="search-bar-container">
                <form id="search-bar">
                    <input type="text" name="search-bar"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}