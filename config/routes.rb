Rails.application.routes.draw do
  resources :places, only: [:index, :show, :create]
  root 'places#index'
end
