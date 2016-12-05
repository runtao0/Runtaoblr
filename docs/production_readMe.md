# Oatnr

[Oatnr Live][link to my Heroku]

Oatnr is a full-stack web application inspired by Tumblr. The back end utilizes Ruby on Rails, a PostgreSQL database, and React.js with a Redux framework on the front end.

## Features and implementation

### Authentication(?)

### Users
  Users are stored in one table in the database. It contains the `id`, `username`, and `email`, `password_token` which are unique to each user. In addition, a session_token is stored to validate the session of a user's log in. Furthermore, a short `description` and link to `profile_pic` and `cover_pic` are also stored for customization.

### Posts
  Posts are stored in on table as well. They contain and `id`, `type`, `title`, and `content` to show the actual content of the post. Content and type will vary, but content will be a a string; text for text and links for audio and video.

  They will be displayed as child components for many containers, including: dashboard/feed, user's post index, user's blogs, and liked posts.

### Dashboard/Feed
  This is the main component of Oatnur. It will contain a store of all followers' posts (`FeedPostIndex`) by order of creation/reblog. This container will hold individual posts as children. Here is a strategy to display feed
  ```js
  render: function () {
    const feedPosts = this.state.feed.values.map((post, key) => {
      return <PostComponent post={ post } key={key}/> })
    })

    return (
    <ul>
      <li>{ feedPosts }</li>
    <ul>
    )
  }
  <ExpandedNotebook notebook={this.state.selectedNotebook} />)
}
  ```

### Follows
  Follows are implemented as a join table in the back end database. It simply has a `follower_id` and `followed_id`, both foreign keys for the users table.

### likes
  Similarly to follows, likes is also implemented as a join table in the database. It simply has a `liked_post_id`, a foreign key for the post in question, and a `liker_id`, a foreign key for the liker.

**Bonuses**
