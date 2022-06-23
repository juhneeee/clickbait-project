class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :invalid

  # def authorize
  #   @current_user = User.find_by(id: session[:user_id])
  #   render json: { errors: ["Not authorized"]}, status: :unauthorized unless @current_user
  # end

  def invalid(error)
    render json: {error: error}, status: 422
  end


end
