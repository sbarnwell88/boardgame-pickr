class AddUserIdToFavorites < ActiveRecord::Migration[5.1]
  def change
    add_column :favorites, :user_id, :integer
    add_column :favorites, :boardgame_id, :integer
  end
end
