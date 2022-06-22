Rails.application.routes.draw do
  namespace :api do
    resources :comparisons
    resources :videos
    resources :users

    get '/get2', to: "videos#get2"

    get "/me", to: "users#show"
    
    post '/login', to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
