import React from 'react'

export default class SearchBar extends React.Component{

    state = {
        search: ""
    }

    handleOnChange = (event) => {
        this.setState({
            search: event.target.value
        })
        console.log(this.state)
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