const todoistApiConfig = {
  //Needs correcting: The version of the API is deprecated. You can check the documentation about the new version here https://developer.todoist.com/rest/v2/?shell#projects
  baseUrl: "https://api.todoist.com/rest/v1",
  headers: {
    //Needs correcting: The token should be stored in the .env file and accessed using process.env. You can read more about environment variables here: https://create-react-app.dev/docs/adding-custom-environment-variables/
    Authorization: "Bearer 28dd9e14555cc09ff37e9e3fb4b835ef33079fd8",
    "Content-Type": "application/json",
  },
};

const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`error ${res.status}`);
};

export const getProjects = async () => {
  return await fetch(`${todoistApiConfig.baseUrl}/projects`, {
    headers: todoistApiConfig.headers,
  })
    .then(getResponse)
    .catch((err) => {
      console.log(err);
    });
};

export const getProjectTasks = (projectId) => {
  return fetch(`${todoistApiConfig.baseUrl}/tasks?project_id=${projectId}`, {
    headers: todoistApiConfig.headers,
  })
    .then(getResponse)
    .catch((err) => {
      console.log(err);
    });
};

export const addTask = (taskText, projectId) => {
  return fetch(`${todoistApiConfig.baseUrl}/tasks`, {
    method: "POST",
    headers: todoistApiConfig.headers,
    body: JSON.stringify({
      content: taskText,
      project_id: projectId,
    }),
  })
    .then(getResponse)
    .catch((err) => {
      console.log(err);
    });
};

export const deleteTask = (taskId) => {
  return (
    fetch(`${todoistApiConfig.baseUrl}/tasks/${taskId}`, {
      method: "DELETE",
      headers: todoistApiConfig.headers,
    })
      // Can be improved: The error handling can be improved by checking the response status and throwing an error if it's not 204. You can read more about fetch error handling here: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch and if you are interested you can read more about error handling in general here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#try...catch_statement
      .then((res) => {
        if (!res.ok) return Promise.reject(`error ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      })
  );
};
