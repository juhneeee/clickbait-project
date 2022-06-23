class Video < ApplicationRecord
    validates :title, :thumbnail, presence: true

    def uploader
        User.find(self.uploader_id)
    end

    def comparisons_as_a
        Comparison.where(video_a_id: self.id)
    end
    def comparisons_as_b
        Comparison.where(video_b_id: self.id)
    end
    def comparisons
        comparisons_as_a + comparisons_as_b
    end
    def impressions
        comparisons.count
    end
    def clicks
        Comparison.where(winner: self.id).count
    end
    def click_through_rate
        clicks/impressions.to_f
    end

    def self.convert_images(num = 1)
        #https://i.ytimg.com/vi/9rZ45Qr5-c4/default.jpg
        sizes = ["", "mq", "hq", "sd", "maxres"]
        Video.all.each do |video|
            video.update(thumbnail: "https://i.ytimg.com/vi/#{video.url}/#{sizes[num]}default.jpg")
        end
    end
end
