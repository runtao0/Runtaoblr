```js
{
  current_user: {
    id: 1,
    username: "Runtao",
    description: "An alien"
    profile_pic: "bomb.com.org.co.uk"
  },
  forms: {
    signUp: { errors: [] },
    logIn: { errors: [] },
    createPost: { errors: []}
    reblogPost: {errors: []}
  },
  Feed: {
    10: {
      id: 10
      title: "Frankenstein",
      body: "Was a novel by Mary Shelly",
      author_id: 1,
      previous_post_id: 1,
      source_id: 1
      updated_at: "Date1"
    }
    20: {
      id: 20
      title: "Moby Dick",
      body: "Was a long book",
      author_id: 1,
      previous_post_id: 2,
      source_id: 2,
      updated_at: "Date2"
    }
  },
  posts: {
    1: {
      id:1
      title: "Frankenstein",
      body: "Was a novel by Mary Shelly",
      author_id: 1,
      previous_post_id: 1,
      source_id: 1,
      updated_at: "Date3"
    }
    2: {
      id:2
      title: "Moby Dick",
      body: "Was a long book",
      author_id: 1,
      previous_post_id: 2,
      source_id: 2,
      updated_at: "Date4"
    }
  },
  follows: {
    3: {
      id: 3,
      username: "SomeDude",
      description: "I'm cool yo"
    },
    9: {
      id: 9,
      username: "SomeDude",
      description: "I'm cool yo"
    }
  },
  followers: {
    total: over 90000,
    9: {
      id: 9,
      username: "SomeDude",
      description: "I'm cool yo"
    }
  }
}

search...
tags...
