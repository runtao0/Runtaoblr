export function fetchSuggestions() {
  return $.ajax({
    method: "GET",
    url: "api/users",
  });
}
