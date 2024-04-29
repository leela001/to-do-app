class Task < ApplicationRecord

    validates :title, :status, presence: true

    def self.save_task(params)
        if params["id"].present?
            task = Task.find_by_id(params["id"])
            raise Exception.new("In valid Task ID: #{params["id"]}") unless task.present?
        else
            if params["status"] == 'To Do'
                total_tasks = Task.all.count
                to_dos_count = Task.where("status = 'To Do'").count
                if to_dos_count.to_f/total_tasks.to_f * 100 >= 50
                    raise Exception.new("Cannot create more 'To Do' tasks. Limit reached")
                else
                    task = Task.new
                    task.description = params["description"]
                    task.title = params["title"]
                end
            else
                task = Task.new
                task.description = params["description"]
                task.title = params["title"]
            end
        end
        task.status = params["status"]
        task.save!
        return task
    end
end