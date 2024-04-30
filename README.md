# README
# To-Do Application

Welcome to the Task-Management application! This application allows you to manage your tasks efficiently with various features such as task creation, status editing, searching, and filtering the tasks based on status.

## Getting Started

## Prerequisites
- Ruby (version 2.6.10)
- Rails (version 5.2.8.1)
- Node (version v14.18.3)
- npm/npx (version 6.14.15)

To get started with the application, follow these steps:

1. Clone the repository to your local machine:
  ``` git clone https://github.com/leela001/to-do-app.git ```


2. Open two terminals:
- In the first terminal, navigate to the project location ('to-do-application'):
  ```
  cd to-do-application
  bundle install
  rake db:migrate
  rails s
  ```

- In the second terminal, navigate to the frontend folder inside the project ('to-do-application') and run:
  ```
  cd frontend
  npm start
  ```

3. Open any web browser and go to [localhost:3001](http://localhost:3001) to view the UI.

## Features

## Task Management
- Create Tasks: Use the provided form to create tasks by providing details such as title and status. Click the 'Create' button to add a new task.
- Edit Tasks: Change the status of tasks using the pencil icon. Only the status can be modified during editing; other fields are disabled.
- Delete Tasks: Remove tasks from the list using the trash icon.
- Task Status: Each task can have different statuses like "To Do", "In Progress", or "Completed".

## Search And Filter
- Search: Utilize the search box located above the list of tasks to search for tasks based on their titles.
- Filter: Filter tasks based on their status using the dropdown menu next to the search box.
- Clear Filter: Clear the filter by clicking the trash icon next to the filter dropdown.
## Validations

- Form Validation: Receive error messages if you try to submit the form without providing the necessary details (title and status).
- Limitations: You cannot create a new "To Do" status task if existing "To Do" tasks are >= 50% of total tasks.




