class ChangePosts < ActiveRecord::Migration
  def change
    change_column_null :posts, :source_id, null: true
    change_column_null :posts, :previous_post_id, null: true
  end
end
