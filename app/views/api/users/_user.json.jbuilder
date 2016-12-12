json.id user.id
json.username user.username
json.profile_pic user.profile_pic
json.follow current_user.follows?(user)
json.info do
  json.description user.description
  json.cover_pic user.cover_pic
end
