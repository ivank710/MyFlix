json.extract! movies, :id, :title, :description, :year, :genre

json.photo url_for(movies.photo)
json.video url_for(movies.video)