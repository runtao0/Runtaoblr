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
    url: "api/users/feed",
  });
}

export function fetchOnePost(post_id) {
  return $.ajax({
    method: "GET",
    url: `api/post/${post_id}`,
  });
}

export function like(idToLike) {
  return $.ajax({
    method: "POST",
    url: `api/posts/${idToLike}/like`,
  });
}

export function unlike(idToUnlike) {
  return $.ajax({
    method: "POST",
    url: `api/posts/${idToUnlike}/unlike`,
  });
}

// export function getPosts
// export function getOnePost
