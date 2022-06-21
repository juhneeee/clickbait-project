# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Clearing data"
Video.destroy_all
Comparison.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!(:videos)
ActiveRecord::Base.connection.reset_pk_sequence!(:comparisons)

puts "Seeding videos"

null = nil

v1 = Video.create!(title:"This Narc Squad Might be Hilarious, But Their Badassness is No Joke | Extreme Job", thumbnail:"https://i.ytimg.com/vi/c4vFxKX3nOg/mqdefault.jpg", url: "c4vFxKX3nOg")
v2 = Video.create!( { title: "Gordon Ramsay Baffled By Tiny Club Sandwich | Kitchen Nightmares FULL EPISODE", thumbnail: "https://i.ytimg.com/vi/iXJNyDorfmM/mqdefault.jpg", url: "iXJNyDorfmM", uploader_id: null })
v3 = Video.create!({ title: "Desperate Drug Squad Takes Over A Chicken Restaurant for An Undercover Operation | Extreme Job", thumbnail: "https://i.ytimg.com/vi/agBFwIO_Be8/mqdefault.jpg", url: "agBFwIO_Be8", uploader_id: null })
v4 = Video.create({ title: "Amnesiac Killer's Superior Knife Skills Shine at A Restaurant | Yoo Hae Jin | Title: Luck-key", thumbnail: "https://i.ytimg.com/vi/FtEKJOGyeTE/mqdefault.jpg", url: "FtEKJOGyeTE", uploader_id: null })