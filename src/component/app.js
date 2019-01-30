import React from 'react'
import axios from 'axios';
import SearchBar from './searchBar';

const KEY = process.env.REACT_APP_API_KEY;
class App extends React.Component {
  
    onSearchedSubmit = searchedInput => {
        console.log(KEY);
        axios
          .get("https://api.unsplash.com/search/photos", {
            params: { query: searchedInput },
            headers: {
              Authorization:
                `Client-ID `+ process.env.REACT_APP_API_KEY
            }
          })
            .then(r => console.log(`Client-ID ` + process.env.REACT_APP_API_KEY));
    }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchedSubmit={this.onSearchedSubmit} />
      </div>
    );
  }
}

export default App