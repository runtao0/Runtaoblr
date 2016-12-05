# Presentational components
*note, *denotes duplicate components*

Home container (AUTH)
  +header
    - Auth form (toggle sign in sign out)
      - sign up
      - sign in
    - search  **bunus**
      - search form
    - log in button (log in container is default)
        - sign in form
      - demo button
  +background **Bonus**
    - background selected posts

Dashboard
  +*header*
    - search
    - logout
    - dashboard Link
    - **Bonus** explore link and container
    - **Bonus** Profile Settings
      - personal blog (reuse from personal feed, styl differently, think about later)
      - list of likes (use from user posts)
      - following
      - edit profile container
        -edit profile form

  +test post button (container)
  >Text
  >Photos
  >Quotes
  >Audio *if time permits*
  >Video *if time permits*

    - new post CONTAINER
      - new post form

  +dashboard/Feed INDEX CONTAINER
    - post ITEMS
      - post details
        1. poster profile picture
        2. poster name
        3. Follow status
        4. poster content
          - all media have the respective media and text body
        5. like button
        6. **bonus** reblogs
        7. **bonus** tags
  +Sidebar CONTAINER
    - Logged in user details (username, short description)
    - button to user Posts
      - *user posts container*
      - followers container


## Routes and container components
path="/" component={ HomeContainer }
  path="/sign_up" component={ AuthFormContainer }
  path="/sign_in" component={ AuthFormContainer }

  path="/surfboard" component={ SurfboardContainer }
    <!-- does this have to be a separate URL if i plan to over lay it?, check pokemon project!!! -->
    path="/surfboard/new_post" component={ NewPostContainer }
  path="/posts/#" component={ UserPostsContainer }
  path="/settings" component={ SettingsContainer } **Bonus**
  path="/blog/username" componen={ BlogContainer } **Bonus**
  path="/user/index" component={ ExploreContainer } **Bonus**
