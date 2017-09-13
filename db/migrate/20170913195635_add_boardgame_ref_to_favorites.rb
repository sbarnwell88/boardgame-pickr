class AddBoardgameRefToFavorites < ActiveRecord::Migration[5.1]
  def change
    add_reference :favorites, :boardgame, foreign_key: true
  end
end
