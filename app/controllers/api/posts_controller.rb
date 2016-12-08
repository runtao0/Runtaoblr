class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    # Will this work???
    @post = Post.find_by(id: params[:post][:id])
  end

  def create
    author_id = @current_user.id
    source_id = 0
    previous_post_id = 0
    new_post = Post.new(post_params, author_id: author_id,
      source_id: source_id, previous_post_id: previous_post_id)

    if new_post.save
      new_post.source_id = new_post.id
      new_post.previous_post_id = new_post.id
      new_post.save
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

  def update
    @post = Post.find_by(id: params[:post][:id])
    @post.title = params[:post][:title]
    @post.content = params[:post][:content]
    if @post.save
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
