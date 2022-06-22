class Video < ApplicationRecord


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
        clicks/impressions
    end
end
