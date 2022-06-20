class CreateComparisons < ActiveRecord::Migration[6.1]
  def change
    create_table :comparisons do |t|
      t.integer :video_a_id
      t.integer :video_b_id
      t.integer :winner
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
