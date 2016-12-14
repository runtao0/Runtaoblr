class AddAttachmentProfileImageToUsers < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.attachment :profile_image
    end
  end
end
