Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :tasks do
      collection do
        post :create_task
      end

      member do
        put :update_task
        delete :destroy_task
      end
    end
  end

  get 'api/tasks', :to =>'tasks#index'
end
