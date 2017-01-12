export function fetchSuggestions() {
  return $.ajax({
    method: "GET",
    url: "api/users/suggestion",
  });
}

export function fetchOneSuggestion() {
  return $.ajax({
    method: "GET",
    url: "api/users/suggestion",
  });
}

export function fetchFollowings() {
  return $.ajax({
    method: "GET",
    url: "api/users/followings",
  });
}

export function follow(idToFollow) {
  return $.ajax({
    method: "POST",
    url: `api/users/${idToFollow}/follow`,
  });
}

export function unfollow(idToUnfollow) {
  return $.ajax({
    method: "POST",
    url: `api/users/${idToUnfollow}/unfollow`,
  });
}

export function fetchUserBlog(username) {
  return $.ajax({
    method: "GET",
    url: `api/users/${username}`,
  });
}
