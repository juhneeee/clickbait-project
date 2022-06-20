class User < ApplicationRecord
    has_many :comparisons

    def videos_uploaded
        Video.where(uploaded_by: self.id)
    end
    
end
