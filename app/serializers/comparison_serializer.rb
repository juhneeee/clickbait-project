class ComparisonSerializer < ActiveModel::Serializer
  attributes :id, :video_a, :video_b, :clicked
  has_one :user
end
