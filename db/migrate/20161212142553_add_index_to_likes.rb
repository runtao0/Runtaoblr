class AddIndexToLikes < ActiveRecord::Migration
  def change
    add_index :likes, :liker_id
    add_index :likes, :liked_post_id
  end
end
