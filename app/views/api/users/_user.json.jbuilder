json.id user.id
json.username user.username
# change this later, too lazy now
json.profile_pic asset_path(user.profile_image.url)
json.profile_image asset_path(user.profile_image.url)
json.follow current_user.follows?(user)
json.description user.description
json.cover_pic asset_path(user.cover_pic.url)
