import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

const movies = [
  {
    title: "샤잠",
    poster: "http://img.movist.com/?img=/x00/05/13/97_p1.jpg"
  },
  {
    title: "럭키",
    poster: "https://t1.daumcdn.net/cfile/tistory/2650E439580AD08237"
  },
  {
    title: "내가 사랑했던 모든 남자들에게",
    poster:
      "http://mblogthumb2.phinf.naver.net/MjAxODA4MjBfMTAw/MDAxNTM0NzMyNjU2OTEw.YIYJVPebppo5S8CK1IAxFvPo4B1iamRo4UJTaOtjHVQg.BhqPYQHXXa88SiPaWX2NbslJpeYFIPgTQuLcQicT6q0g.JPEG.hjy24090/image_3793822371534732622480.jpg?type=w800"
  },
  {
    title: "Me Before You",
    poster: "http://i.imgur.com/MdyRgm2.jpg"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster} />;
        })}
      </div>
    );
  }
}

export default App;
