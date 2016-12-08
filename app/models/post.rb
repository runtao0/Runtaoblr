# == Schema Information
#
# Table name: posts
#
#  id               :integer          not null, primary key
#  type             :string           not null
#  title            :string           not null
#  content          :text             not null
#  author_id        :integer          not null
#  previous_post_id :integer
#  source_id        :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Post < ActiveRecord::Base
  validates :type, :title, :content, :author_id, presence: true
  validates :type, inclusion: { in: %w(text, pic, quote, audio, video), message: "Not a valid post type" }

  belongs_to(
    :user,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :author_id
  )

end
