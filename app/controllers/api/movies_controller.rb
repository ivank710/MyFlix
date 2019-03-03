class Api::MoviesController < ApplicationController
  def index
    @movies = Movie.all
  end

  def show
    @movie = Movie.find(params[:id])

    unless @movie
      render :json ["Movie does not exist"], status: 404
    end
  end
  
end
