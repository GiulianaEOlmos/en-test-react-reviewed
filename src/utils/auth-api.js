const BASE_URL = "https://auth.nomoreparties.co";

const getResponse = (res) => {
  console.log(res);
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const register = (data) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // Needs correcting: The password should be hashed before sending it to the server. You could read more about hashing here: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
    body: JSON.stringify(data),
  })
    .then(getResponse)
    .catch((err) => {
      console.log(err);
    });
};
export const login = (data) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(getResponse)
    .then((data) => {
      localStorage.setItem("jwt", data.token);
      // Needs correctingg: To avoid potential security issues, we shouldn't return the jwtToken as part of the response.
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// Well done: Well use of an API to check the token
export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(getResponse)
    .catch((err) => {
      console.log(err);
    });
};
