Rails.application.routes.draw do
  resources :items

  namespace :api do
    namespace :v1 do
      resources :items do
        collection do
          delete 'delete_all/', to: 'items#delete_all_items'
          patch 'update_all/', to: 'items#update_all_items'
        end
      end
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
