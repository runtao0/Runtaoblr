json.array! @rand_users do |user|
  json.id user.id
  json.username user.username
  json.profile_pic user.profile_pic
  # for state
  json.follow current_user.follows?(user)
end
