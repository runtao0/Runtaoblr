class Api::PostsController < ApplicationController
  # def index
  #   @all_posts = Post.includes(:author).all
  # end

  def show
    render json: Post.find(params[:id])
  end

  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      # render "api/posts/index"
      @feed_posts = Post.feed_posts(current_user.id)
      render :feed
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def feed
    @feed_posts = Post.feed_posts(current_user.id)
  end

  def destroy
    @post = current_user.posts.find_by(id: params[:id])
    if @post
      @post.destroy
      # render "api/posts/index"
      render json: Post.all
    else
      render json: ["Post could not be found"], status: 404
    end
  end

  def update
    @post = Post.find_by(id: params[:post][:id])
    @post.title = params[:post][:title]
    @post.content = params[:post][:content]
    if @post.update
      render "api/posts/index"
    else
      render json: ["Post could not be edited"], status: 402
    end
  end

  def like
    new_like = Like.new(liked_post_id: params[:id], liker_id: current_user.id)
    if new_like.save
      @feed_posts = Post.feed_posts(current_user.id)
      render :feed
    else
      render json: new_like.errors.full_messages, status: 422
    end
  end

  def unlike
    new_unlike = Like.find_by(liked_post_id: params[:id], liker_id: current_user.id)
    if new_unlike.destroy
      @feed_posts = Post.feed_posts(current_user.id)
      render :feed
    else
      render json: new_unlike.errors.full_messages, status: 422
    end

  end

  def follow
    post = Post.find(params[:id])
    new_follow = Follow.new(sheperd_id: post.author_id, sheep_id: current_user.id)
    if new_follow.save
      @feed_posts = Post.feed_posts(current_user.id)
      render :feed
    else
      render json: new_follow.errors.full_messages, status: 422
    end
  end

  def unfollow
    post = Post.find(params[:id])
    new_unfollow = Follow.find_by(sheperd_id: post.author_id, sheep_id: current_user.id)
    if new_unfollow.destroy
      @feed_posts = Post.feed_posts(current_user.id)
      render :feed
    else
      render json: new_unfollow.errors.full_messages, status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:kind, :title, :content)
  end
end
