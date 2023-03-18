import React from "react";
import SearchBar from '../searchbar/SearchBar.jsx';

class Nav extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){
        return(
            <div>
                <SearchBar onSearch={this.props.onSearch}/>
            </div>
        )
    }
}

export default Nav