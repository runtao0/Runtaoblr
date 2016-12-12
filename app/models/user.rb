# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  description     :text             not null
#  profile_pic     :string           not null
#  cover_pic       :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token, :default_values
  # will this happen even if I'm editing a user?

# is author to many posts
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

#fills default values for user settings
  def default_values
    self.description ||= "Description goes here"
    self.profile_pic ||= default_prof_pic
    self.cover_pic ||= default_cover_pic
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

  def default_prof_pic
    "http://www.nationalturk.com/en/wp-content/uploads/2010/08/Naomi-Campbell.jpg"
  end

  def default_cover_pic
    "http://www.vh1.com/news/wp-content/uploads/blog.vh1.com/2005/02/83462-52169785_10.jpg"
  end
end
