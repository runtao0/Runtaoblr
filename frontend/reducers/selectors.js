// selects all the posts and returns an array with all the post objets
export const allPosts = (posts) => Object.keys(posts).map(id => {
  if(id !== 'errors') {
    return posts[id];
  }
});

export const allSuggestions = (suggestions) => Object.keys(suggestions).map(id => suggestions[id]);
