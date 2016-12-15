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

export function showUser() {
  return $.ajax({
    method: "GET",
    url: "api/users/show",
  });
}

export function editUser(user) {
  return $.ajax({
    method: "PATCH",
    url: "api/users/update",
    dataType: "json",
    contentType: false,
    processData: false,
    data: user,
  });
}
