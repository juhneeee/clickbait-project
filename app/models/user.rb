class User < ApplicationRecord
    has_many :comparisons

    def videos_uploaded
        Video.where(uploader_id: self.id)
    end
    
end
