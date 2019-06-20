import {connect} from 'react-redux';
import MovieShow from './movie_show';
import {fetchMovie} from '../../actions/movies_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  movie: state.entities.movies[ownProps.match.params.movieId],
  allMovies: state.entities.movies
});

const mapDispatchToProps = dispatch =>({
  fetchMovie: (id) => dispatch(fetchMovie(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieShow));