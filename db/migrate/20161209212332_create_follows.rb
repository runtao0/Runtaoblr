class CreateFollows < ActiveRecord::Migration
  def change
    create_table :follows do |t|
      t.integer :sheep_id, null: false
      t.integer :sheperd_id, null: false

      t.timestamps null: false
    end
  end
end
