# == Schema Information
#
# Table name: follows
#
#  id         :integer          not null, primary key
#  sheep_id   :integer          not null
#  sheperd_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Follow < ActiveRecord::Base
  validates :sheep_id, :sheperd_id, presence: true
  validates_uniqueness_of :sheep_id, :scope => [:sheperd_id],
    message: "You already follow this blogger"

  belongs_to(
    :sheep_user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :sheep_id
  )

  belongs_to(
    :sheperd_user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :sheperd_id
  )
end
