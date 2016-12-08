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

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
