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

piazza = Movie.create!(title: "Piazza dei Miracoli", description: "The Piazza dei Miracoli is located in Pisa, Tuscany, Italy. It is recognized as an important centre of European medieval art.", year: 2017, genre: "Europe")
piazza_vid = open('https://s3-us-west-1.amazonaws.com/worldflix-dev/Vids/Piazza+dei+Miracoli_+Pisa_+Italy.mp4')
piazza_photo = open('https://s3-us-west-1.amazonaws.com/worldflix-dev/Photos/piazza_img.jpg')
piazza.video.attach(io: piazza_vid, filename: 'piazza-vid.mp4')
piazza.photo.attach(io: piazza_photo, filename: 'piazza-photo.jpg')

barcelona = Movie.create!(title: "Barcelona", description: "Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture.", year: 2015, genre: "Europe")
barcelona_vid = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Vids/Barcelona_vid.mp4")
barcelona_photo = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Photos/barcelona_img.jpg")
barcelona.video.attach(io: barcelona_vid, filename: "barcelona_vid.mp4")
barcelona.photo.attach(io: barcelona_photo, filename: "barcelona_photo.jpg")

london = Movie.create!(title: "London", description: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.", year: 2016, genre: "Europe")
london_vid = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Vids/London_vid.mp4")
london_photo = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Photos/london_img.jpg")
london.video.attach(io: london_vid, filename: "london_vid.mp4")
london.photo.attach(io: london_photo, filename: "london_photo.mp4")

munich = Movie.create!(title: "Munich", description: "Munich, Bavaria’s capital, is home to centuries-old buildings and it is known for its annual Oktoberfest celebration.", year: 2014, genre: "Europe")
munich_vid = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Vids/Munich_vid.mp4")
munich_photo = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Photos/munich_img.jpg")
munich.video.attach(io: munich_vid, filename: "munich_vid.mp4")
munich.photo.attach(io: munich_photo, filename: "munich_photo.mp4")

paris = Movie.create!(title: "Paris", description: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture.", year: 2017, genre: "Europe")
paris_vid = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Vids/Paris_vid.mp4")
paris_photo = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Photos/paris_img.jpg")
paris.video.attach(io: paris_vid, filename: "paris_vid.mp4")
paris.photo.attach(io: paris_photo, filename: "paris_photo.mp4")

rome = Movie.create!(title: "Rome", description: "Rome, Italy’s capital, is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture and culture on display.", year: 2015, genre: "Europe")
rome_vid = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Vids/Rome_vid.mp4")
rome_photo = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Photos/Coliseum.jpg")
rome.video.attach(io: rome_vid, filename: "rome_vid.mp4")
rome.photo.attach(io: rome_photo, filename: "rome_photo.mp4")

venice = Movie.create!(title: "Venice", description: "Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea.", year: 2018, genre: "Europe")
venice_vid = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Vids/Venice_+Italy.mp4")
venice_photo = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Photos/Venice.jpg")
venice.video.attach(io: venice_vid, filename: "venice_vid.mp4")
venice.photo.attach(io: venice_photo, filename: "venice_photo.mp4")

vietnam = Movie.create!(title: "Hội An", description: "Hội An is a city on Vietnam’s central coast known for its well-preserved Ancient Town, cut through with canals.", year: 2016, genre: "Asia")
vietnam_vid = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Vids/Ho%CC%A3%CC%82i+An+Ancient+Town%2C+Vietnam.mp4")
vietnam_photo = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Photos/Hoi-An.jpg")
vietnam.video.attach(io: vietnam_vid, filename: "vietnam_vid.mp4")
vietnam.photo.attach(io: vietnam_photo, filename: "vietnam_photo.mp4")

myanmar = Movie.create!(title: "Shwedagon Pagoda", description: "The Shwedagon Pagoda, officially named Shwedagon Zedi Daw, is a gilded stupa located in Yangon, Myanmar.", year: 2015, genre: "Asia")
myanmar_vid = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Vids/Shwedagon+Pagoda%2C+Myanmar.mp4")
myanmar_photo = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Photos/shwedagon-pagoda.jpg")
myanmar.video.attach(io: myanmar_vid, filename: "myanmar_vid.mp4")
myanmar.photo.attach(io: myanmar_photo, filename: "myanmar_photo.mp4")

seoul = Movie.create!(title: "Seoul", description: "Seoul, the capital of South Korea, is a huge metropolis where modern skyscrapers, and pop culture meet Buddhist temples, palaces and street markets.", year: 2017, genre: "Asia")
seoul_vid = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Vids/seoul.mp4")
seoul_photo = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Photos/seoul.jpg")
seoul.video.attach(io: seoul_vid, filename: "seoul_vid.mp4")
seoul.photo.attach(io: seoul_photo, filename: "seoul_photo.mp4")

singapore = Movie.create!(title: "Singapore", description: "Singapore, an island city-state off southern Malaysia, is a global financial center with a tropical climate and multicultural population.", year: 2018, genre: "Asia")
singapore_vid = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Vids/singapore.mp4")
singapore_photo = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Photos/singapore.jpg")
singapore.video.attach(io: singapore_vid, filename: "singapore_vid.mp4")
singapore.photo.attach(io: singapore_photo, filename: "singapore_photo.mp4")

taj_mahal = Movie.create!(title: "Taj Mahal", description: "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.", year: 2016, genre: "Asia")
taj_mahal_vid = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Vids/taj_mahal.mp4")
taj_mahal_photo = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Photos/tajMahal.jpg")
taj_mahal.video.attach(io: taj_mahal_vid, filename: "taj_mahal_vid.mp4")
taj_mahal.photo.attach(io: taj_mahal_photo, filename: "taj_mahal_photo.mp4")

thailand = Movie.create!(title: "Thailand", description: "Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha.", year: 2015, genre: "Asia")
thailand_vid = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Vids/thailand_vid.mp4")
thailand_photo = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Photos/thailand.jpg")
thailand.video.attach(io: thailand_vid, filename: "thailand_vid.mp4")
thailand.photo.attach(io: thailand_photo, filename: "thailand_photo.mp4")

tokyo = Movie.create!(title: "Tokyo", description: "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.", year: 2014, genre: "Asia")
tokyo_vid = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Vids/tokyo_vid.mp4")
tokyo_photo = open("https://s3-us-west-1.amazonaws.com/worldflix-dev/Photos/tokyo.jpg")
tokyo.video.attach(io: tokyo_vid, filename: "tokyo_vid.mp4")
tokyo.photo.attach(io: tokyo_photo, filename: "tokyo_photo.mp4")



