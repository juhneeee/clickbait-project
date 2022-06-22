Rails.application.routes.draw do
  
  resources :comparisons
  resources :videos
  resources :users
  # Routing logic: fallback requests for React Router.
  get 'get2', to: "videos#get2"
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
