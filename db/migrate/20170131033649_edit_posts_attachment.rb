class EditPostsAttachment < ActiveRecord::Migration
  def change
    change_table :posts do |t|
      remove_attachment :posts, :media_content
      t.attachment :image
      t.attachment :audio
      t.attachment :video
    end
  end
end
