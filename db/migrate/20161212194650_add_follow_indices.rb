class AddFollowIndices < ActiveRecord::Migration
  def change
    add_index :follows, :sheep_id
    add_index :follows, :sheperd_id
  end
end
