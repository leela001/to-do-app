class Task < ApplicationRecord

    validates :title, :status presence :true


    def save_task(params)
        task = Task.new
        task.title = params.title
        task.description = params.description
        task.status = params.status
        task.save!
    end
end