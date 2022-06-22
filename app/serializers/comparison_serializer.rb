class ComparisonSerializer < ActiveModel::Serializer
  attributes :id, :winner, :video_a, :video_b
  has_one :user

  def video_a
    video = Video.find(self.object.video_a_id)
    video.slice(:id, :title, :thumbnail, :url)
  end
  def video_b
    video = Video.find(self.object.video_b_id)
    video.slice(:id, :title, :thumbnail, :url)
  end
end
