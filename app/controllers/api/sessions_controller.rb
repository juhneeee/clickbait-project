class Api::SessionsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def create
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
##<ActionDispatch::Request::Session:0x00007ff34c6e2a20
        # byebug
        render json: user
      else
        render json: { error: "Invalid username or password" }, status: :unauthorized
      end
    end

    def hello_world
      session[:count] = (session[:count] || 0) + 1
      p session[:count]
      render json: { count: session[:count] }
    end

    def destroy
      session.delete :user_id
      byebug
      head :no_content
    end

 
      
  end
  