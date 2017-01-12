export function fetchUserBlog(username) {
  return $.ajax({
    method: "GET",
    url: `api/users/${username}`
  });
}

export function fetchBlogPosts(userID, page) {
  return $.ajax({
    method: "GET",
    url: `api/posts/${userID}/${page}`,
  });
}
