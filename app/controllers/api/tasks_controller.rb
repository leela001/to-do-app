class Api::TasksController < ApplicationController

    protect_from_forgery

    def create_task
        @task = Task.save_task(params)
        render :json => @task
    end

    def update_task
        @task = Task.save_task(params)
        render :json => @task
    end

    def destroy_task
        @task = Task.find_by_id(params["id"])
        @task.delete
        render :json => {message: "Task successfully deleted", task_id: params["id"]}
    end


    def index
        @task = Task.all
        render :json => @task
    end
end
