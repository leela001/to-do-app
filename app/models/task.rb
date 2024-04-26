class Task < ApplicationRecord

    validates :title, :status, presence: true


    def self.save_task(params)
        debugger
        if params["id"].present?
            task = Task.find_by_id(params["id"])
            raise Exception.new("In valid Task ID: #{params["id"]}")
        else
            task = Task.new
        end
        task.title = params["title"]
        task.description = params["description"]
        task.status = params["status"]
        task.save!
        return task
    end
end