Rails.application.routes.draw do
  namespace :api do
    resources :stores do
      resources :products
    end
  end
end
