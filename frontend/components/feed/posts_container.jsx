import { connect } from 'react-redux';
import PostIndividual from './post_individual';
import { editPost, destroyPost, likePost, unlikePost, followPost, unfollowPost } from '../../actions/post_actions';

const mapStateToProps = ({ session }, ownProps) => ({
  currentUser: session.currentUser,
  post: ownProps.post
});

const mapDispatchToProps = (dispatch) => ({
  editPost: (post) => dispatch(editPost(post)),
  destroyPost: (post) => dispatch(destroyPost(post)),
  follow: (post) => dispatch(followPost(post)),
  unfollow: (post) => dispatch(unfollowPost(post)),
  likePost: (post) => dispatch(likePost(post)),
  unlikePost: (post) => dispatch(unlikePost(post)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndividual);
