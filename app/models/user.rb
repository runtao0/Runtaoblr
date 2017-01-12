# == Schema Information
#
# Table name: users
#
#  id                         :integer          not null, primary key
#  username                   :string           not null
#  password_digest            :string           not null
#  session_token              :string           not null
#  description                :text             not null
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#  profile_image_file_name    :string
#  profile_image_content_type :string
#  profile_image_file_size    :integer
#  profile_image_updated_at   :datetime
#  cover_pic_file_name        :string
#  cover_pic_content_type     :string
#  cover_pic_file_size        :integer
#  cover_pic_updated_at       :datetime
#

class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token, :default_values

  #TODO add constraint { :username => /[a-zA-Z0-9-_.]+/ }
  has_many(
    :posts,
    class_name: 'Post',
    primary_key: :id,
    foreign_key: :author_id,
    dependent: :destroy
  )
# has many followers
  has_many(
    :sheep,
    class_name: 'Follow',
    primary_key: :id,
    # the current_user is the sheperd
    foreign_key: :sheperd_id
  )

  # follows many users
  has_many(
    :sheperds,
    class_name: 'Follow',
    primary_key: :id,
    foreign_key: :sheep_id
  )

  #be careful to keep this straight!
  has_many :followers, through: :sheep, source: :sheep_user
  has_many :followings, through: :sheperds, source: :sheperd_user

# will this association work?
  has_many :followed_posts, through: :followings, source: :posts

# likes many posts
  has_many(
    :likes,
    class_name: "Like",
    primary_key: :id,
    foreign_key: :liker_id
  )

  has_many :liked_posts, through: :likes, source: :liked_post

  has_attached_file :profile_image, default_url: "default_profile.jpg", styles: {
    big: "500x500#",
    small: "66x66#"
  }
  validates_attachment_content_type(
    :profile_image,
    content_type: /\Aimage\/.*\Z/
  )

  has_attached_file :cover_pic, default_url: "default_cover_pic.jpg"
  validates_attachment_content_type(
    :cover_pic,
    content_type: /\Aimage\/.*\Z/
  )
#fills default values for user settings
  def default_values
    self.description ||= "Description goes here"
  end

  def post?(post)
    self.id == post.author_id
  end

  def self.suggestions(user_id, limit)
    sheperd_ids = User.find(user_id).sheperds.pluck(:sheperd_id) << user_id

    suggestions = User.where.not(id: sheperd_ids).order("RANDOM()").limit(limit)
  end

  def followed_users
    followings = User.where("id IN (:sheperds)", sheperds: self.sheperds.pluck(:sheperd_id))
  end


  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(password_digest).is_password?(pw)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  def follows?(user)
    sheperds.exists?(sheperd_id: user.id)
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
