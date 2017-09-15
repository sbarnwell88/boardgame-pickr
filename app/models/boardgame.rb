class Boardgame < ApplicationRecord
    validates :name, presence: true, length: { minimum: 2 }
    has_many :favorites
    has_many :users, through: :favorites
end
