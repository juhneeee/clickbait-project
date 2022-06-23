class User < ApplicationRecord
    has_many :comparisons

    validates :username, :password, presence: true

    def videos_uploaded
        Video.where(uploader_id: self.id)
    end
    
end
