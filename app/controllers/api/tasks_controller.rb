class Api::TasksController < ApplicationController

    protect_from_forgery

    def create_task
        begin
            @task = Task.save_task(params, @current_user)
            render :json => @task
        rescue Exception => e
            render :json => {message: e.message}, status: :unprocessable_entity
        end
    end

    def update_task
        @task = Task.save_task(params, @current_user)
        render :json => @task
    end

    def destroy_task
        @task = Task.find_by_id(params["id"])
        @task.delete
        render :json => {message: "Task successfully deleted", task_id: params["id"]}
    end


    def index
        @tasks = @current_user.tasks
        render :json => @tasks
    end

    def query
        if params[:search].present?
            @tasks = Task.where('user_id = ? and title LIKE ?', @current_user.id, "#{params[:search]}%")
        elsif params[:filter].present? && params[:filter] != ""
            @tasks = Task.where("user_id = ? and status = ?", @current_user.id, params[:filter])
        else
            @tasks = @current_user.tasks
        end
        render :json => @tasks
    end
end
