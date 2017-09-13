class Api::FavoritesController < ApplicationController
    # before_action :authenticate_user!

    def index
        @favorites = Favorite.all 
        render json: @favorites
    end

    def create
        @user = current_user
        @user.favorite = Favorite.create() 
    end

    def show
        @user = current_user
        @favorite = @user.favorite
        render json: @favorite
    end

    def update 
        @user = current_user
        @user.boardgames.create(favorite_params)
    end

    def destroy
        @favorite = Favorite.find params[:id]
        @favorite.destroy
    end

    private
    def favorite_params
        favorite = params.require(:favorite).permit(:boardgame_id).merge(boardgame_id: boardgame_id)
    end
end
