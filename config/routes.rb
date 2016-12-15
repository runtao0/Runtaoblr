Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:create, :update, :show] do
      member do
        post :follow
        post :unfollow
      end
      collection do
        get :suggestion
        get :followings
      end
    end

    resources :posts, only: [:create, :show, :destroy, :update] do
      member do
        post :like
        post :unlike
        post :follow
        post :unfollow
      end
      collection do
        get :feed
      end
    end
  end

end
