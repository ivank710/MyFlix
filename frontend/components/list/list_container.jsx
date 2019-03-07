import {connect} from 'react-redux';
import {fetchMovie} from '../../actions/movies_actions';
import List from '../list/list';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,

});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(List);