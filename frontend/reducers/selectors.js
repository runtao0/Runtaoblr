// selects all the posts and returns an array with all the post objets
export const allPosts = (posts) => Object.keys(posts).map(id => posts[id]);
