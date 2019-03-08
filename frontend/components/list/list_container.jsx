import {connect} from 'react-redux';
import {fetchListItems, deleteListItem} from '../../actions/list_actions';
import List from '../list/list';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser.id,
  lists: Object.values(state.entities.lists)
});

const mapDispatchToProps = dispatch => ({
  fetchListItems: () => dispatch(fetchListItems()),
  deleteListItem: (id) => dispatch(deleteListItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);