import { connect } from 'react-redux';
import PostForm from './post_form';
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
)(PostForm)
