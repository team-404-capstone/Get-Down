Rails.application.routes.draw do
  resources :events
  devise_for :users
  get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  root to: "pages#index"
end
