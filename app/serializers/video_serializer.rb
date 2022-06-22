class VideoSerializer < ActiveModel::Serializer
  attributes :id, :title, :thumbnail, :url, :uploader_id, :stats

  def stats
    {
      impressions: self.object.impressions,
      clicks: self.object.clicks,
      click_through_rate: self.object.click_through_rate.round(5)
    }
  end
end
