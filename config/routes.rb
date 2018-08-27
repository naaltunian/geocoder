Rails.application.routes.draw do
  resources :places, only: [:index]
  root 'places#index'
end
