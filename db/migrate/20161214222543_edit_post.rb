class EditPost < ActiveRecord::Migration
  def change
    change_column_null :posts, :content, null: true
  end
end
