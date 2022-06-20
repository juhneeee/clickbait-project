class VideoSerializer < ActiveModel::Serializer
  attributes :id, :title, :thumbnail, :url, :uploaded_by
end
