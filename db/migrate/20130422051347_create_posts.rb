class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.references :user
      t.text :content
      t.string :type

      t.timestamps
    end
    add_index :posts, :user_id
  end
end
