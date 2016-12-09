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
    url: "api/posts",
  });
}

export function fetchOnePost(post_id) {
  return $.ajax({
    method: "GET",
    url: `api/post/${post_id}`,
  });
}

// export function getPosts
// export function getOnePost
