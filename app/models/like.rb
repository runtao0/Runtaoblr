# == Schema Information
#
# Table name: likes
#
#  id            :integer          not null, primary key
#  liked_post_id :integer          not null
#  liker_id      :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Like < ActiveRecord::Base
  validates :liked_post_id, :liker_id, presence: true
  validates_uniqueness_of :liked_post_id, scope: [:liker_id],
    message: "You already like this post"

  belongs_to(
    :liker,
    class_name: "User",
    primary_key: :id,
    foreign_key: :liker_id
  )

  belongs_to(
    :liked_post,
    class_name: "Post",
    primary_key: :id,
    foreign_key: :liked_post_id
  )
end
