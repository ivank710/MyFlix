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
    # debugger
    # @list = List.find(params[:id])
    @list = current_user.list.find_by(movie_id: params[:id])

    # debugger
    if @list
      @list.destroy
      render 'api/lists/show'
    else
      render json: "Not found", status: 404
    end
  end

 
  
end
