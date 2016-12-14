# == Schema Information
#
# Table name: posts
#
#  id                         :integer          not null, primary key
#  kind                       :string           not null
#  title                      :string           not null
#  content                    :text
#  author_id                  :integer          not null
#  previous_post_id           :integer
#  source_id                  :integer
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#  media_content_file_name    :string
#  media_content_content_type :string
#  media_content_file_size    :integer
#  media_content_updated_at   :datetime
#

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
