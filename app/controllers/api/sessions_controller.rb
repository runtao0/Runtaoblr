class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      log_in(@user)
      render "api/users/show"
    else
      render json: ["Incorrect username/password"], status: 422
    end
  end

  def destroy
    if logged_in?
      log_out
      render json: JSON.generate({})
    else
      render json: ["no one was signed in"], status: 404
    end
  end
end
