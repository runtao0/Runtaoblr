Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:create, :show] do
      member do
        post :follow
        post :unfollow
      end
      collection do
        get :feed
        get :suggestion
      end
    end

    resources :posts, only: [:create, :show, :destroy, :update] do
      member do
        post :like
        post :unlike
      end
    end
  end

end
