class Api::FavoritesController < ApplicationController
    # before_action :authenticate_user!

    def index
        @user = User.find params[:user_id]
        @favorites = @user.boardgames
        render json: @favorites

    end

    def create
        @favorite = Favorite.create!(favorite_params)

        render json: @favorite 
    end

    def destroy
        puts request.body.read
        json_request = JSON.parse(request.body.read)
        @favorite = Favorite.find_by(boardgame_id: json_request["boardgame_id"], user_id: json_request["user_id"])
        @favorite.destroy
        render status: :ok
    end

    private
    def favorite_params
        params.require(:favorite).permit(:boardgame_id, :user_id)
    end

end
