import {connect} from 'react-redux';
import {fetchMovie} from '../../actions/movies_actions';
import { createListItem } from '../../actions/list_actions';
import FeaturedMovie from './featured_movie';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchMovie: (id) => dispatch(fetchMovie(id)),
  createListItem: (data) => dispatch(createListItem(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedMovie);
