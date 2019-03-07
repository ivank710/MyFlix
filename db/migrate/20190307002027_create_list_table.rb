class CreateListTable < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.integer :user_id, null: false
      t.integer :movie_id, null: false
      t.timestamps
    end
    add_index :lists, [:user_id, :movie_id], unique: true
  end
end
