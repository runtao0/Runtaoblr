Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:create, :update] do
      member do
        post :follow
        post :unfollow
      end
      collection do
        get :suggestion
        get :followings
        get :show, :path => '/:username', :constrain => { :username => /[a-zA-Z0-9\-\_\.]+/ }
      end
    end

    resources :posts, only: [:create, :show, :destroy, :update] do
      member do
        post :like
        post :unlike
        post :follow
        post :unfollow
        get :feed
        get :blog_posts, :path => '/:page', :constrain => { :id => /[0-9]+/}
      end

    end
  end

end
