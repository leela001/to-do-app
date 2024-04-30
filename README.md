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

## Screenshots
- Initial
<img width="1440" alt="image" src="https://github.com/leela001/to-do-app/assets/60808456/1227f120-147a-4916-a5b8-e7da41fc6e6c">
- Fetching the results based on search
<img width="1429" alt="image" src="https://github.com/leela001/to-do-app/assets/60808456/c28c1d88-405b-4c15-9d86-936b25f04454">
- Fetching the results based on filter
<img width="1440" alt="image" src="https://github.com/leela001/to-do-app/assets/60808456/af771884-9a76-41da-b55b-d21dfe9ef1e2">
## Validation
- If both Status and Title fields are blank
<img width="1434" alt="image" src="https://github.com/leela001/to-do-app/assets/60808456/2c94858e-cb0d-4cc8-bde5-ec38cd30e1b0">
- If the Title field is blank
<img width="1440" alt="image" src="https://github.com/leela001/to-do-app/assets/60808456/a64e1440-9865-4f76-b03f-b89ff9969cea">
- If TODo status count reaches the max limit
<img width="1433" alt="image" src="https://github.com/leela001/to-do-app/assets/60808456/06c26a2d-c683-4be5-8813-3b6ebaba3ab5">
- Editing the field
<img width="1440" alt="image" src="https://github.com/leela001/to-do-app/assets/60808456/217b8bc5-0bfe-4cde-9cb9-adaddf4438c4">

## Video Recording
- [recording-2024-04-30-13-26-36.webm](https://github.com/leela001/to-do-app/assets/60808456/ab711697-9f19-4dc5-bab8-6f1fcef58ca4)
