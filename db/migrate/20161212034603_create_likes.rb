class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :liked_post_id, null: false
      t.integer :liker_id, null: false
      
      t.timestamps null: false
    end
  end
end
