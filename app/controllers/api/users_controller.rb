class Api::UsersController < ApplicationController
    # skip_before_action :authorize, only: :create

    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        byebug
        if user
            render json: user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end
    # def show
    #     render json: @user
    # end


    private
    def user_params
        params.permit(:username, :password)
    end


end
