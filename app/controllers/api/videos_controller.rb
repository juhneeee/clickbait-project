class Api::VideosController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid
    # before_action :authorize, only: [:update, :destroy]

    def index
        videos = Video.all
        render json: videos
    end
    def show
        video = Video.find_by!(id: params[:id])
        render json: video, serializer: VideoShowSerializer
    end
    def create
        video = Video.create!(video_params)
        render json: video, status: 201
    end
    
    def get2
        videos = Video.all.sample(2)
        render json: videos#, serializer:VideoLiteSerializer
    end
    def update
        video = Video.find_by!(id: params[:id])
        video.update(video_params)
        render json: video
    end
    def destroy
        video = Video.find_by!(id: params[:id])
        video.destroy
    end

    private
    def video_params
        params.permit(:title, :thumbnail, :url, :uploader_id )
    end
    def invalid
        render json: {error: "Invalid youtube url or missing title/thumbnail"}, status: 422
    end
end
