class Api::VideosController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

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
        render json: videos
    end


    private
    def video_params
        params.permit(:title, :thumbnail, :url, :uploader_id )
    end
    def invalid
        render json: {error: "Invalid youtube url or missing title/thumbnail"}, status: 422
    end
end
