class AddAttachmentCoverToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :cover
    end
  end

  def change
    remove_attachment :users, :profile
    remove_column :users, :cover_pic
  end

  def self.down
    remove_attachment :users, :cover
  end
end
