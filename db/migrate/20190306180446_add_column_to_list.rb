class AddColumnToList < ActiveRecord::Migration[5.2]
  def change
    add_column :lists, :movie_id, :integer, null: false
    add_index :lists, :movie_id, unique: true
  end
end
