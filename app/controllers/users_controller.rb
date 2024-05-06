class UsersController < ApplicationController

    protect_from_forgery
    
    skip_before_action :authorized, only: [:create_user]


    def create_user
        user = User.new(user_params)
        begin
            user.save!
            render :json => {message: "User created successfully"}, status: :created
        rescue Exception => e
            render :json => {message: e.message}, status: :unprocessable_entity
        end
    end

    def get_user_details
        begin
            user = @current_user
            render :json => {id: user.id, user_name: user.user_name, user_email: user.email, tasks_count: user.tasks.count}, status: :ok
        rescue Exception => e
            render :json => {message: e.message}, status: :unprocessable_entity
        end
    end



    private
        def user_params
            params.require(:user).permit(:user_name, :email, :password, :password_confirmation)
        end

end
