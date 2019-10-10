Rails.application.routes.draw do
  
  resources :comments
  devise_for :users
  get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  resources :attends
  resources :events
  root to: "pages#index"
end
