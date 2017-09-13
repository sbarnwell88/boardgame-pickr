class Boardgame < ApplicationRecord
    # belongs_to :favorites
    has_many :users, through: :favorites
end
