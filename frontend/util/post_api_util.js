export function createImagePost(post) {
  return $.ajax({
    method: "POST",
    url: "api/posts",
    dataType: "json",
    contentType: false,
    processData: false,
    data: post,
  });
}

export function createPost(post) {
  return $.ajax({
    method: "POST",
    url: "api/posts",
    dataType: "json",
    data: post,
  });
}


export function editPost(post) {
  debugger
  return $.ajax({
    method: "PATCH",
    url: `api/posts/${post.post.id}`,
    data: post,
  });
}

export function editPicPost(post) {
  return $.ajax({
    method: "PATCH",
    url: `api/posts/${post.get("id")}`,
    contentType: false,
    processData: false,
    data: post,
  });
}

export function destroyPost(post) {
  return $.ajax({
    method: "DELETE",
    url: `api/posts/${post.id}`,
  });
}

export function fetchPosts(page = 1) {
  return $.ajax({
    method: "GET",
    url: `api/posts/${page}/feed`,
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
