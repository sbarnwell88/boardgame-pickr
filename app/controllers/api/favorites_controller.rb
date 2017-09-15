class Api::FavoritesController < ApplicationController
    # before_action :authenticate_user!

    def index
        # @user = User.find(1)
        @user = User.find params[:user_id]
        @favorites = @user.boardgames
        render json: @favorites
        # puts JSON.parse(request.body.read)
        # json_request = JSON.parse(request.body.read)
        # @user = User.find_by params[:user_id]
        # # @boardgames = Boardgame.where(:boardgame_id params[:boardgame_id])
        # @favorites = @user.favorites 
        # render json: @favorites
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
