class CreateBoardgames < ActiveRecord::Migration[5.1]
  def change
    create_table :boardgames do |t|
      t.string :name
      t.string :description
      t.string :image
      t.string :thumbnail
      t.integer :min_players
      t.integer :max_players
      t.integer :playing_time
      t.integer :year_published
      t.integer :rating
      t.references :favorites, foreign_key: true

      t.timestamps
    end
  end
end
