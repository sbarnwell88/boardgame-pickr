class Api::UsersController < ApplicationController
    def show
        @user = User.find params[:id]
        render json: @user
    end

    def update 
        @user = User.find params[:id]
        @user.update!
    end
    private
    def user_params
        params.require(:user).permit(:name, :description, :image, :min_players, :max_players)
    end
end
