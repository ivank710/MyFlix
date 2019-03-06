import {connect} from 'react-redux';
import Genre from './genre';
import {fetchMovies, fetchMovie} from '../../actions/movies_actions';

const mapStateToProps = (state, ownProps) => ({
  movies: Object.values(state.entities.movies),
  movie: state.entities.movies[ownProps.match.params.movieId]
});

const mapDispatchToProps = dispatch => ({
  fetchMovie: (id) => dispatch(fetchMovie(id)),
  fetchMovies: () => dispatch(fetchMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(Genre)