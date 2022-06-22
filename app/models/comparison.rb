class Comparison < ApplicationRecord
  belongs_to :user, optional: true
  
  def video_a
    Video.find(video_a_id)
  end
  def video_b
    Video.find(video_b_id)
  end
end
