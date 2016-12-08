class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :type, null: false
      t.string :title, null: false
      t.text :content, null: false
      t.integer :author_id, null: false
      t.integer :previous_post_id, null: false
      t.integer :source_id, null: false

      t.timestamps null: false
    end
    add_index :posts, :type
    add_index :posts, :author_id
    add_index :posts, :previous_post_id
    add_index :posts, :source_id
  end
end
