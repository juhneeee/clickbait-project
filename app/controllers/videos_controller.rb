class VideosController < ApplicationController

    def index
        videos = Video.all
        render json: videos
    end
    def show
        video = video.find(:id)
        render json: video
    end
    def create
        video = Video.create!(video_params)
        render json: video, status: 201
    end

    private
    def video_params
        params.permit(:title, :thumbnail, :url, :uploader_id )
    end
end
