class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.integer :artist_id
      t.boolean :switch

      t.timestamps
    end
  end
end