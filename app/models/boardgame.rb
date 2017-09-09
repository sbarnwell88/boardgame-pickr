class Boardgame < ApplicationRecord
    has_many :users, through: :favorites
end
