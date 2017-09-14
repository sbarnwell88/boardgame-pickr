class Api::FavoritesController < ApplicationController
    # before_action :authenticate_user!

    def index
        @favorites = Favorite.all 
        render json: @favorites
    end

    def create
        @favorite = Favorite.create!(params[:boardgame], params[:user]) 
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
        params.require(:favorite).permit(:boardgame, :user)
    end
    # def favorite_boardgame_params
    #     params.require(:favorite).permit(:boardgame_id)
    # end
    # def favorite_user_params
    #     params.require(:favorite).permit(:user_id)
    # end

end
