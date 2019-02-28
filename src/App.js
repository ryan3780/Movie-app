import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {}

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis} />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi() //movies에 await 모드로 _callApi함수를 가지고 있다.
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating') // api를 평점순으로 가져오는 방법
      .then(response => response.json())// 위에가 끝나면 여기 시작해라. then()은 fetch의 결과물만을 받는다. 
      //.json을 하면 json 형식으로 data를 바꿔준다
      .then(json => json.data.movies)
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App" >
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
