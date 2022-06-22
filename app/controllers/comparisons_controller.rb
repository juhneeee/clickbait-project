class ComparisonsController < ApplicationController

    def index
        comparisons = Comparison.all
        render json: comparisons
    end
    def show
        comparison = Comparison.find_by!(id: params[:id])
        render json: comparison
    end

    def create
        comparison = Comparison.create!(comparison_params)
        render json: comparison, status: 201
    end
    private
    def comparison_params
        params.permit(:video_a_id, :video_b_id, :winner, :user_id)
    end
end
