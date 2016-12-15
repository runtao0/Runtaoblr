class Api::UsersController<ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
  end

  def show
    @user = current_user
  end

  # def index
  #   @rand_users = User.where.not(id: current_user.id).order("RANDOM()").limit(5)
  # end

  def suggestion
    @suggested_users = User.suggestions(current_user.id)
  end

  def followings
    @followed_users = current_user.followed_users
  end

  def follow
    new_follow = Follow.new(sheperd_id: params[:id], sheep_id: current_user.id)
    if new_follow.save
      @suggested_users = User.suggestions(current_user.id)
      render :suggestion
    else
      render json: new_follow.errors.full_messages, status: 422
    end
  end

  def unfollow
    new_unfollow = Follow.find_by(sheep_id: current_user.id, sheperd_id: params[:id])
    if new_unfollow.destroy
      @suggested_users = User.suggestions(current_user.id)
      render :suggestion
    else
      render json: new_unfollow.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
