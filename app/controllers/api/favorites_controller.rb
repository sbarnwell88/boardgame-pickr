class Api::FavoritesController < ApplicationController
    # before_action :authenticate_user!

    def index
        @favorites = Favorite.all 
        render json: @favorites
    end

    def create

        # grab request body
        @favorite = Favorite.create!(favorite_params)

        # # get board game ID off of body
        # game_id = @favorite params[:boardgame_id]

        # # get user ID off of body
        # user_id = @favorite params[:user_id]

        # # make a new favorite with those two IDs inside
        # @favorite = Favorite.create!(boardgame_id: game_id, user_id: user_id)

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
    # def favorite_boardgame_params
    #     params.require(:favorite).permit(:boardgame_id)
    # end
    # def favorite_user_params
    #     params.require(:favorite).permit(:user_id)
    # end

end
