# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Movie.destroy_all

my_user = User.create!(email: 'ivan@gmail.com', password: '123456')
demo_user = User.create!(email: 'demo@gmail.com', password: '123456')

piazza = Movie.create!(title: "Piazza dei Miracoli", description: "The Piazza dei Miracoli, is a walled 8.87-hectare area located in Pisa, Tuscany, Italy. It is recognized as an important centre of European medieval art.", year: 2017, genre: "Europe")
piazza_vid = open('https://s3-us-west-1.amazonaws.com/worldflix-dev/Vids/Piazza+dei+Miracoli_+Pisa_+Italy.mp4')
# # piazza_photo = open('app/assets/images/Piazza.jpg')
piazza.video.attach(io: piazza_vid, filename: 'piazza-vid.mp4')
# piazza.photo.attach(io: piazza_photo, filename: 'piazza-photo.jpg')

