class Api::ListsController < ApplicationController
  def create
    @list = List.new()
    @list.user_id = current_user.id
    @list.movie_id = params[:movie_id]

    if @list.save
      render :index
    else
      render :json ["Unable to create list"], status: 404
    end
  end

  def index
    @lists = List.all

    if @lists
      render :index
    else
      render :json ["Empty list"], status: 404
    end
  end

  def destroy
    @list = List.find(params[:id])
    if @list.user_id === current_user.id
      @list.destroy
      render :index
    end
  end
  
end
