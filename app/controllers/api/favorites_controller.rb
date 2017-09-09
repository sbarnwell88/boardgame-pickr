class Api::FavoritesController < ApplicationController
    # before_action :authenticate_user!

    def index
        @favorites = Favorite.all 
        render json: @favorites
    end

    def create
        boardgame_id = params[:boardgame_id]
        user_id = params[:user_id]
        @favorite = Favorite.create!(user_id: user_id, boardgame_id: boardgame_id)
    end

    def show
        @boardgame = Boardgame.find params[:id]
        render json: @boardgame
    end

    def destroy
        @favorite = Favorite.find params[:id]
        @favorite.destroy
    end
end
