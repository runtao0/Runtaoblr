json.array! @feed_posts do |post|
  json.partial! "api/posts/post", post: post
end
