import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm)
