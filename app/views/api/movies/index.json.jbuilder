@movies.each do |movie|
  json.set! movie.id do
    json.partial! 'api/movies/movie', movies: movie
  end
end