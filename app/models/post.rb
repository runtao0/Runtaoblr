# == Schema Information
#
# Table name: posts
#
#  id                 :integer          not null, primary key
#  kind               :string           not null
#  title              :string           not null
#  content            :text
#  author_id          :integer          not null
#  previous_post_id   :integer
#  source_id          :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  audio_file_name    :string
#  audio_content_type :string
#  audio_file_size    :integer
#  audio_updated_at   :datetime
#  video_file_name    :string
#  video_content_type :string
#  video_file_size    :integer
#  video_updated_at   :datetime
#

class Post < ActiveRecord::Base
  validates :kind, :title, :author_id, presence: true
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

  has_attached_file :image, #default_url: "edit1.png",
  styles: { big: "600x600#", small: "66x66#" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\Z/

  has_attached_file :video
  validates_attachment_content_type :video, content_type: /\Avideo\/.*\Z/


  def self.feed_posts(user_id)
    self.joins("LEFT OUTER JOIN follows ON author_id = sheperd_id")
        .where("sheep_id = :id OR author_id = :id", id: user_id)
        .order("created_at DESC")
        .uniq
  end

  def liked_by_user?(user)
    likes.exists?(liker_id: user.id)
  end

  def notes_count
    Like.where(liked_post_id: self.id).count
  end

  def url
    case self.kind
    when "video"
      self.video.url
    when "audio"
      self.audio.url
    when "pic"
      if self.content == "undefined" || self.content == ""
        self.image.url
      else
        self.content
      end
    else
      "/media_contents/original/missing.png"
    end
  end

end
