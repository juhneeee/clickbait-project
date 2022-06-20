class CreateVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :videos do |t|
      t.string :title
      t.string :thumbnail
      t.string :url
      t.integer :uploaded_by

      t.timestamps
    end
  end
end
