import React, {Component} from "react";

// Functional component
/*const SearchBar = () => {
 return <input />;
 };*/

// Class component
class SearchBar extends Component {

    // State
    constructor(props) {
        super(props);

        this.state = {term: ''}
    }

    render() {
        return (
            <div className="search-bar">
                {/*Controlled form element*/}
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
                {/*Value of the input: {this.state.term}*/}
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }


// Old JS way not very concise
    /*onInputChange(event) {
     console.log(event.target.value);
     }*/
}

export default SearchBar;