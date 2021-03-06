class Api::BoardgamesController < ApplicationController
    before_action :authenticate_user!

    def index
        @boardgames = Boardgame.all
        render json: @boardgames
    end

    def create
        @boardgame = Boardgame.where(api_id: params[:api_id]).first_or_create!(boardgame_params)
        render json: @boardgame
    end

    def show
        @boardgame = Boardgame.where(api_id: params[:id])
        puts @boardgame
        if @boardgame.exists?
            render json: @boardgame
            # return json: 500
        else
            render status:500, json: {message: "cannot find api id within this database"}
        end
    end

    def update
        @boardgame = Boardgame.where(api_id: params[:id])
        @boardgame.update(boardgame_params)

        render json: @boardgame
    end

    def destroy
        @boardgame = Boardgame.find_by(api_id: params[:id])
        @boardgame.destroy
        
    end

    private
    def boardgame_params
        params.require(:boardgame).permit(:name, :description, :image, :thumbnail, :min_players, :max_players, :api_id)
    end
end
