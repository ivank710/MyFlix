import {connect} from 'react-redux';
import Genre from './genre';
import {fetchMovies, fetchMovie} from '../../actions/movies_actions';
import {createListItem} from '../../actions/list_actions';

const mapStateToProps = (state, ownProps) => ({
  movies: Object.values(ownProps.movies),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchMovie: (id) => dispatch(fetchMovie(id)),
  fetchMovies: () => dispatch(fetchMovies()),
  createListItem: (data) => dispatch(createListItem(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Genre);