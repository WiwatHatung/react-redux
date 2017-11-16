import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: 'Starting value'};
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChamge(event.target.value)}/>
            </div>
        );
    }
    onInputChamge(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;