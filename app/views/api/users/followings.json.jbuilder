json.array! @followed_users do |user|
  json.partial! 'api/users/user', user: user
end
