export function fetchSuggestions() {
  return $.ajax({
    method: "GET",
    url: "api/users",
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
