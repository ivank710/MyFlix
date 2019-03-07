class Api::ListsController < ApplicationController
  def create
    @list = List.new(list_params)
    
    if @list.save
      render :show
    else
      render json: ["Unable to create list item"], status: 404
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
      render :index
    end
  end

  private
  def list_params
    params.require(:list).permit(:user_id, :movie_id)
  end
  
end
