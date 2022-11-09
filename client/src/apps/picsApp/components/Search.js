import React from "react";
// import "./style.css";

class Search extends React.Component {
  state = {
    search: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.search)
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="ui action big input search-box">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.search}
              onChange={(e)=> this.setState({search: e.target.value})}
            />
            <button className="ui grey big icon button">
              <i className="search icon"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
