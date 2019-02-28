import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

// class Movie extends Component {
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired,
//     }
//     render() {
//         // console.log(this.props);
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster} />
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }
// 위에 클래스와 아래 덤브(멍청한, state가 없는)는 같은 기능을 한다.
function Movie({ title, poster, genres, synopsis }) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
        </div>
    )
}

// class MoviePoster extends Component {
//     static propTypes = {
//         poster: PropTypes.string.isRequired
//     }
//     render() {
//         return (
//             <img src={this.props.poster} alt="Movie Poster" />
//         )
//     }
// }
// 위에 클래스와 아래 덤브(멍청한, state가 없는)는 같은 기능을 한다.
function MoviePoster({ poster, alt }) {
    return (
        < img src={poster} alt={alt} title={alt} className="Movie_Poster" />
    )
}

function MovieGenre({ genre }) {
    return (
        <span className="Movie_Genre">{genre}</span>
    )
}


Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}
export default Movie