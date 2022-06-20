class CreateComparisons < ActiveRecord::Migration[6.1]
  def change
    create_table :comparisons do |t|
      t.integer :video_a
      t.integer :video_b
      t.integer :clicked
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
