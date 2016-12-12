class Api::UsersController<ApplicationController
  def create
    @user = User.new(user_params)
    # debugger
    if @user.save
      log_in(@user)
      # debugger
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = current_user
  end

  def index
    @rand_users = User.where.not(id: current_user.id).order("RANDOM()").limit(5)
  end

  def feed
    # followed_blogs = current_user.followings.all.map do |following|
    #   following.id
    # end << current_user.id
    # @feed_posts = Post.includes(:author)
    #                   .where("author_id IN (?)", followed_blogs)
    #                   .order("created_at DESC")
    @feed_posts = Post.joins("LEFT OUTER JOIN follows ON author_id = sheperd_id")
                      .where("sheep_id = :id OR author_id = :id", id: current_user.id)
                      .order("created_at DESC")
    # @feed_posts = Post.feed_posts(current_user)
  end

  def follow
    # how is the id being passed? THROUGH THE DATA IN AJAX!!
    # interpolate into the url route
    new_follow = Follow.new(sheperd_id: params[:id], sheep_id: current_user.id)
    if new_follow.save
      render json: ["success"]
    else
      render json: new_follow.errors.full_messages, status: 422
    end
    #what should I render?
  end

  def unfollow
    new_unfollow = Follow.find_by(sheep_id: current_user.id, sheperd_id: params[:id])
    if new_unfollow.destroy
      render json: ["success"]
    else
      render json: new_unfollow.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
