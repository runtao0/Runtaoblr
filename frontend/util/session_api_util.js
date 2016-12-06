export function signUp(user) {
  return $.ajax({
    method: "POST",
    url: "api/users",
    data: user,
  });
}

export function logIn(user) {
  return $.ajax({
    method: "POST",
    url: "api/session",
    data: user,
  });
}

export function logOut() {
  return $.ajax({
    method: "DELETE",
    url: "api/session",
  });
}
