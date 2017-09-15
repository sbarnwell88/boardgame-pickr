class Api::FavoritesController < ApplicationController
    # before_action :authenticate_user!

    def index
        @user = User.find_by params[:id]
        @favorites = @user.boardgames
        render json: @favorites
    end

    def create
        @favorite = Favorite.create!(favorite_params)

        render json: @favorite 
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
