class Api::PostsController < ApplicationController
  # def index
  #   @all_posts = Post.includes(:author).all
  # end

  def show
    render json: Post.includes(:author).find(params[:id])
  end

  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      # @feed_posts = Post.includes(:author).feed_posts(current_user.id)

      #TODO still need to make it so that creation causes a receiveOnePost
      @feed_posts = [@post]
      render :feed
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def feed
    @feed_posts = Post.includes(:author).feed_posts(current_user.id).page(params[:id]).per(10)
  end

  def destroy
    @post = current_user.posts.find(params[:id])
    if @post
      @post.destroy
      @feed_posts = [@post]
      render :feed
    else
      render json: ["Post could not be found"], status: 404
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      @feed_posts = [@post]
      render :feed
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def like
    post = Post.find_by(:id => params[:id])
    new_like = Like.new(liked_post_id: params[:id], liker_id: current_user.id)
    if new_like.save
      @feed_posts = [post]
      render :feed
    else
      render json: new_like.errors.full_messages, status: 422
    end
  end

  def unlike
    post = Post.find_by(:id => params[:id])
    new_unlike = Like.find_by(liked_post_id: params[:id], liker_id: current_user.id)
    if new_unlike.destroy
      @feed_posts = [post]
      render :feed
    else
      render json: new_unlike.errors.full_messages, status: 422
    end

  end

  # def follow
  #   post = Post.find(params[:id])
  #   new_follow = Follow.new(sheperd_id: post.author_id, sheep_id: current_user.id)
  #   if new_follow.save
  #     @feed_posts = Post.includes(:author).feed_posts(current_user.id)
  #     render :feed
  #   else
  #     render json: new_follow.errors.full_messages, status: 422
  #   end
  # end

  def unfollow
    post = Post.find(params[:id])
    new_unfollow = Follow.find_by(sheperd_id: post.author_id, sheep_id: current_user.id)
    if new_unfollow.destroy
      render json: {}
    else
      render json: new_unfollow.errors.full_messages, status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:kind, :title, :content, :media_content, :last_post_id)
  end

end
