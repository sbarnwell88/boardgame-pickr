class Api::FavoritesController < ApplicationController
    # before_action :authenticate_user!

    def index
        @user = current_user.id
        @favorites = @user.favorites
        # @favorites = Favorite.all 
        render json: @favorites
    end

    def create
        @user = current_user.id
        @favorites = @user.favorite.create(favorite_params)
        # @favorite = Favorite.create!(favorite_params) 
        render json: @favorite
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
        params.require(:favorite).permit(:boardgame_id, :user_id)
    end
end
