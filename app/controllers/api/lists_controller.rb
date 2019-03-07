class Api::ListsController < ApplicationController
  def create
    @list = current_user.list.new(movie_id: params[:movieId])
    
    if @list.save
      render :show
    else
      render json: ["Unable to create list item"], status: 422
    end
  end

  def show
    render :show
  end

  def index
    @movies = current_user.movies
    @lists = List.where(user_id: current_user.id)

    render :index
  end

  def destroy
    @list = List.find(params[:id])
    if @list.user_id === current_user.id
      @list.destroy
      render 'api/lists/show'
    end
  end

 
  
end
