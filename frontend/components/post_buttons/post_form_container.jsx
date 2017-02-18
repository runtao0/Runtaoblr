import { connect } from 'react-redux';
import PostButtons from './post_buttons';
import { createPost, createImagePost } from '../../actions/post_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post)),
  createImagePost: (post) => dispatch(createImagePost(post))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostButtons)
