Rails.application.routes.draw do
  namespace :api do
    resources :comparisons, only: [:index, :show, :create]
    resources :videos, only: [:index, :show, :create]
    resources :users, only:[:index]

    get '/get2', to: "videos#get2"

    get "/me", to: "users#show"
    
    post '/login', to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    post '/signup', to: "users#create"
    get '/signup', to: "sessions#test"
  end
  get '/hello', to: 'application#hello_world'

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
