json.id post.id
json.author_id post.author_id
json.profile_pic post.author.profile_pic
json.title post.title
json.content post.content
json.kind post.kind
json.liked post.liked_by_user?(current_user)
json.follow current_user.follows?(post.author)
json.notes post.notes_count
