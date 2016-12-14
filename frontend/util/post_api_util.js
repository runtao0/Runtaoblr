export function createPost(post) {
  return $.ajax({
    method: "POST",
    url: "api/posts",
    data: post,
  });
}
export function editPost(post_id) {
  return $.ajax({
    method: "PATCH",
    url: `api/posts/${post_id}`,
    data: post,
  });
}

export function destroyPost(post) {
  return $.ajax({
    method: "POST",
    url: "api/posts",
    data: post,
  });
}

export function fetchPosts() {
  return $.ajax({
    method: "GET",
    url: "api/posts/feed",
  });
}

export function fetchOnePost(post_id) {
  return $.ajax({
    method: "GET",
    url: `api/post/${post_id}`,
  });
}

export function likePost(post) {
  return $.ajax({
    method: "POST",
    url: `api/posts/${post.id}/like`,
  });
}

export function unlikePost(post) {
  return $.ajax({
    method: "POST",
    url: `api/posts/${post.id}/unlike`,
  });
}
export function followPost(post) {
  return $.ajax({
    method: "POST",
    url: `api/posts/${post.id}/follow`,
  });
}
export function unfollowPost(post) {
  return $.ajax({
    method: "POST",
    url: `api/posts/${post.id}/unfollow`,
  });
}

// export function getPosts
// export function getOnePost