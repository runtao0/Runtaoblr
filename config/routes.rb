Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :index] do
      member do
        post :follow
        post :unfollow
      end
    end
    resources :posts, only: [:create, :index, :show, :destroy, :update]
  end
end
