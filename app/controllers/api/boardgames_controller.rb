class Api::BoardgamesController < ApplicationController
    # before_action :authenticate_user!

    def index
        @boardgames = Boardgame.all
        render json: @boardgames
    end

    def create
        @boardgame = Boardgame.create!(boardgame_params)
        # (name: @boardgame.name).first_or_create!
        # create!(boardgame_params)
        render json: @boardgame
    end

    def show
        @boardgame = Boardgame.find params[:id]
        if Boardgame.exists?(false)
            # return json: 500
            render :status => 500
        else
            render json: @boardgame
        end
    end

    def update
        @boardgame = Boardgame.find params[:id]
        @boardgame.update!(boardgame_params)

        render json: @boardgame
    end

    def destroy
        @boardgame = Boardgame.find params[:id]
        @boardgame.destroy
        
    end

    private
    def boardgame_params
        params.require(:boardgame).permit(:name, :description, :image, :thumbnail, :min_players, :max_players, :api_id)
    end
end
