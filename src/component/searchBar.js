import React from 'react';

class SearchBar extends React.Component {
  state = {
    searched: ""
  };

  //   NOT SEARCHBAR JOB TO KNOW WHAT TO DO WITH SEARCHED TERM
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSearchedSubmit(this.state.searched)
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={e => this.setState({ searched: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar