class VideoSerializer < ActiveModel::Serializer
  attributes :id, :title, :thumbnail, :url, :uploader_id
end
