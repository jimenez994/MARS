import React from "react";
import Search from "./components/Search";
import Content from './components/Content';
import  {  createApi } from "unsplash-js";
import unsplash from './api/unsplash';
import './components/style.css'

class PicsApp extends React.Component {
  state = {
    images: []
  };

  // using the Unsplash package
  componentDidMount() {
    const unsplashApi = new createApi({
      accessKey: process.env.REACT_APP_UNSPLASH_KEY
    });
    unsplashApi.search.getPhotos({
      query: "red smile",
      page: 1,
      perPage: 50
    }).then(result => {
      if (result.type === 'success') {
        this.setState({ images: result.response.results })
      }
    })
  }
  
  // using axios 
  onFormSubmit = async (search) => {
    if (search === "") {
      search = "happy girl"
    }
    // opt 1 --------axios refactor in api folder
    const response = await unsplash.get('/search/photos', {
      params: { query: search, per_page: 50 }
    })
    this.setState({ images: response.data.results })
  }

  render() {
    
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Search onSubmit={this.onFormSubmit} />
        <Content data={this.state.images} />
    </div>
  );
}
};

export default PicsApp;
