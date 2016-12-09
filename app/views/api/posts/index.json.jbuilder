json.array! @all_posts do |post|
  json.id post.id
  json.author_id post.author_id
  json.profile_pic post.author.profile_pic
  json.title post.title
  json.content post.content
  json.kind post.kind
end
