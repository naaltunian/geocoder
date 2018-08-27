Rails.application.routes.draw do
  resources :places, only: [:index, :show]
  root 'places#index'
end
