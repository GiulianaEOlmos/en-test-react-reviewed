# React
## Task description

The task is to implement a service for storing a list of tasks for projects. The back end of the task list uses the Todoist API. Authorization requests are sent to the auth.nomoreparties.co backend. All users will have common tasks and projects.

Requirements:

- When submitting the registration form, a request must be sent to the address `/signup`.
- After a successful registration, there should be a redirect to the login page.
- When submitting the login form, a request for `/signin` should be sent.
- After a successful login, a redirect to the `/projects` page should be performed. Only authorized users can go to the `/projects` page.
- On the projects page, the user can switch between projects and see the tasks of each of them.
- If the user is not logged in, when they try to go to the `/projects` page, they are redirected to` /signin`.
- The site header should display the email of the authorized user.
- When you click on the "Add" button, a request should be sent to create a new task. After the server responds, the input field should be cleared.
- When you click on the "Delete" button, a request should be sent to the server and the task should be removed from the page.
- By clicking on the "Logout" button, the user is logged out and redirected to the login page.

