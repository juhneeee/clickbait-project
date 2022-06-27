class User < ApplicationRecord
    has_many :comparisons

    has_secure_password
    
    validates :username, :password, presence: true
    validates :username, uniqueness: :true

    def videos_uploaded
        Video.where(uploader_id: self.id)
    end
    
end
