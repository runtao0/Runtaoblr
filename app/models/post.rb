class Post < ActiveRecord::Base
  validates :type, :title, :content, :author_idm, presence: true
  validates :previous_post_id, :source_id, presence: true
  validates :type, inclusion: { in: %w(text, pic, quote, audio, video), message: "Not a valid post type" }

  belongs_to(
    :user,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :author_id
  )
  
end
