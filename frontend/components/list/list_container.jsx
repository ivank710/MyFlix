import {connect} from 'react-redux';
import {fetchMovie} from '../../actions/movies_actions';
import List from '../list/list';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  movies: Object.values(state.entities.movies)
});

const mapDispatchToProps = dispatch => ({
  fetchMovie: (id) => dispatch(fetchMovie(id)),
  fetchMovies: () => dispatch(fetchMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(List);