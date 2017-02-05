class Api::UsersController<ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      # default users to follow
      rupaul = User.find_by(username: "rupaul")
      runtao = User.find_by(username: "runtao")
      david = User.find_by(username: "davidKarp")
      naomi = User.find_by(username: "naomi")
      pikachu = User.find_by(username: "pikachu")
      Follow.create(sheep_id: @user.id, sheperd_id: rupaul.id)
      Follow.create(sheep_id: @user.id, sheperd_id: runtao.id)
      Follow.create(sheep_id: @user.id, sheperd_id: david.id)
      Follow.create(sheep_id: @user.id, sheperd_id: naomi.id)
      Follow.create(sheep_id: @user.id, sheperd_id: pikachu.id)
      
      log_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    if current_user.update(update_params)
      @user = current_user
      render :show
    else
      render json current_user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(:username => params[:username])
  end

  def suggestion
    @suggested_users = User.suggestions(current_user.id, 5)
  end

  def followings
    @followed_users = current_user.followed_users
  end

  def follow
    new_follow = Follow.new(sheperd_id: params[:id], sheep_id: current_user.id)
    if new_follow.save
      @suggested_users = User.suggestions(current_user.id, 1)
      render :suggestion
    else
      render json: new_follow.errors.full_messages, status: 422
    end
  end

  def unfollow
    new_unfollow = Follow.find_by(sheep_id: current_user.id, sheperd_id: params[:id])
    if new_unfollow.destroy
      @suggested_users = User.suggestions(current_user.id, 0)
      render :suggestion
    else
      render json: new_unfollow.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :description, :profile_image, :cover_pic)
  end

  def update_params
    params.require(:user).permit(:username, :description, :profile_image, :cover_pic)
  end
end
