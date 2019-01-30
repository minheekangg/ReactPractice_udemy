import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './searchBar';
import ImageList from './imageList'

class App extends React.Component {
    state = {images: []}
  
    // onSearchedSubmit = searchedInput => {
    //     axios
    //       .get("https://api.unsplash.com/search/photos", {
    //         params: { query: searchedInput },
    //         headers: {
    //           Authorization:
    //             `Client-ID `+ KEY
    //         }
    //       })
    //         .then(r => console.log(`Client-ID ` + process.env.REACT_APP_API_KEY));
    // }

    // ALTERNATIVE TO .THEN //////////////////////////////////////////////////
    onSearchedSubmit = async (searchedInput) => {
        const response = await unsplash.get('search/photos', {
            params: { query: searchedInput }
          })
        this.setState({images: response.data.results})
    }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchedSubmit={this.onSearchedSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App