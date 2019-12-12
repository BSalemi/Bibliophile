import React from 'react'

export default class SearchBar extends React.Component{
    render(){
        return(
            <div id="searchBar">
                <form>
                    <input type="text" name="search-bar"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}