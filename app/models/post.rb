# == Schema Information
#
# Table name: posts
#
#  id               :integer          not null, primary key
#  kind             :string           not null
#  title            :string           not null
#  content          :text             not null
#  author_id        :integer          not null
#  previous_post_id :integer
#  source_id        :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Post < ActiveRecord::Base
  validates :kind, :title, :content, :author_id, presence: true
  validates :kind, inclusion: { in: %w(text pic quote audio video), message: "Not a valid post type" }

  belongs_to(
    :author,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :author_id
  )

  has_many(
    :likes,
    class_name: "Like",
    primary_key: :id,
    foreign_key: :liked_post_id
  )

  has_many :liker_users, through: :likes, source: :liker

  def self.feed_posts(user_id)
    self.joins("LEFT OUTER JOIN follows ON author_id = sheperd_id")
        .where("sheep_id = :id OR author_id = :id", id: user_id)
        .order("created_at DESC")
  end

  def liked_by_user?(user)
    likes.exists?(liker_id: user.id)
  end

  def notes_count
    Like.where(liked_post_id: self.id).count
  end

end
