class Api::PostsController < ApplicationController
  def index
    render json: Post.all
  end

  def show
    # Will this work???
    render json: Post.find(params[:id])
  end

  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      render :index
    else
      render :json ["Post could not be created"], status: 422
    end
  end

  def destroy
    @post = Post.find_by(id: params[:post][:id])
    if @post
      @post.destroy
      render :index
    else
      render :json ["Post could not be found"], status: 404
    end
  end

  def update
    @post = Post.find_by(id: params[:post][:id])
    @post.title = params[:post][:title]
    @post.content = params[:post][:content]
    if @post.update
      render :index
    else
      render :json ["Post could not be edited"], status: 402
    end
  end

  private

  def post_params
    params.require(:post).permit(:type, :title, :content)
  end
end
