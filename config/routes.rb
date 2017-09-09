Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  namespace :api do
    resources :favorites
    resources :boardgames
    resources :top_rated
    end
  root to: "boardgames#index"
end
