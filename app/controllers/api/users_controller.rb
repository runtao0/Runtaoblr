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

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
