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

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
