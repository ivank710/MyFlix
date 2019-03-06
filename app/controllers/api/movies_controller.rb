class Api::MoviesController < ApplicationController
  def index
    @movies = Movie.all
    if @movies
      render :index
    else
      render :json ["There are no movies"], status: 404
    end
  end

  def show
    @movie = Movie.find(params[:id])
    if @movie 
      render :show
    else 
      render :json ["Movie does not exist"], status: 404
    end
  end
  
end
