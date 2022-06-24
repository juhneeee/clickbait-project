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
    def foo
        #helper function for matchups
        hash_a = comparisons_as_a.group(:video_b_id).group(:winner).count
        hash_b = comparisons_as_b.group(:video_a_id).group(:winner).count

        combined = hash_a
        hash_b.each do |k, v|
            if combined[k]
                combined[k] += v
            else
                combined[k] = v
            end
        end
        #combined stores data as matchup, winner, count
        combined
    end

    def matchups
        entries = foo.entries
        result = {}
        entries.each do |entry|
            opp = entry[0][0]
            key = opp == entry[0][1] ? :loss : :win
            if !result[opp]
                #creates matchup record
                result[opp]={id: opp, win:0, loss:0, video: Video.find(opp).slice(:thumbnail,:title, :uploader_id)}
            end
            result[opp][key] += entry[1]
            #updates wins/losses
        end
        result.values
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
        #use 4
        #https://i.ytimg.com/vi/9rZ45Qr5-c4/default.jpg
        sizes = ["", "mq", "hq", "sd", "maxres"]
        Video.all.each do |video|
            video.update(thumbnail: "https://i.ytimg.com/vi/#{video.url}/#{sizes[num]}default.jpg")
        end
    end
end
