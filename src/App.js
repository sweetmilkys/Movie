import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  // Render: ComponentWillMount() -> render() -> componentDidMount()
  // Update: ComponentWillReciveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidMount()
  state = {};

  componentDidMount() {
    // console.log(2);
    this._getMovies();
  }

  _renderMovies = () => {
    // console.log(5);
    const movies = this.state.movies.map(movie => {
      return (
        <Movie
          key={movie.id}
          title={movie.title_english}
          poster={movie.large_cover_image}
          genres={movie.genres}
          synopsis={movie.synopsis}
        />
      );
    });
    return movies;
  };

  _getMovies = async () => {
    // console.log(3);
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };

  _callApi = () => {
    // console.log(4);
    return fetch(
      `https://yts.am/api/v2/list_movies.json?sort_by=download count`
    )
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(error => console.log(error));
  };

  render() {
    // console.log(1);
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
