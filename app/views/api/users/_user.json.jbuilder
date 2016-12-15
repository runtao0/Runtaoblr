json.id user.id
json.username user.username
json.profile_pic user.profile_pic
json.profile_image asset_path(user.profile_image.url)
json.follow current_user.follows?(user)
json.description user.description
json.cover_pic asset_path(user.cover_pic.url)
