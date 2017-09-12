class Api::BoardgamesController < ApplicationController
    # before_action :authenticate_user!

    def index
        @boardgames = Boardgame.all
        render json: @boardgames
    end

    def create
        @boardgame = Boardgame.create!(boardgame_params)
    end

    def show
        @boardgame = Boardgame.find params[:id]
        if Boardgame.exists?(false)
            return json: 500
        else
            render json: @boardgame
        end
    end

    def update
        @boardgame = Boardgame.find params[:id]
        @boardgame.update!(boardgame_params)
    end

    def destroy
        @boardgame = Boardgame.find params[:id]
        @boardgame.destroy
        
    end

    private
    def boardgame_params
        params.require(:boardgame).permit(:name, :description, :image, :min_players, :max_players)
    end
end
