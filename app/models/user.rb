class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token
  before_save :default_values

#fills default values for user settings
  def default_values
    self.description = "Description goes here"
    self.profile_pic = default_prof_pic
    self.cover_pic = default_cover_pic
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
