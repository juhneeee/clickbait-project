class Api::SessionsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def create
      user = User.find_by!(username: params[:username], password: params[:password])
      session[:user_id] = user.id
      render json: user
    end

    def destroy
      session.delete :user_id
      head :no_content
    end

    private
    def not_found error
      render json: {error: error}, status:404
    end
      
  end
  