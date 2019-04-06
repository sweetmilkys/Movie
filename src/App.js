import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

const movieTitles = [
  "샤잠",
  "럭키",
  "내가 사랑했던 모든 남자들에게",
  "Me Before You"
];
const MovieImages = [
  "http://img.movist.com/?img=/x00/05/13/97_p1.jpg",
  "https://t1.daumcdn.net/cfile/tistory/2650E439580AD08237",
  "http://mblogthumb2.phinf.naver.net/MjAxODA4MjBfMTAw/MDAxNTM0NzMyNjU2OTEw.YIYJVPebppo5S8CK1IAxFvPo4B1iamRo4UJTaOtjHVQg.BhqPYQHXXa88SiPaWX2NbslJpeYFIPgTQuLcQicT6q0g.JPEG.hjy24090/image_3793822371534732622480.jpg?type=w800",
  "http://i.imgur.com/MdyRgm2.jpg"
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={MovieImages[0]} />
        <Movie title={movieTitles[1]} poster={MovieImages[1]} />
        <Movie title={movieTitles[2]} poster={MovieImages[2]} />
        <Movie title={movieTitles[3]} poster={MovieImages[3]} />
      </div>
    );
  }
}

export default App;
