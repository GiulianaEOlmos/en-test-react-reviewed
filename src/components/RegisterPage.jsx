import { useState } from "react";

const RegisterPage = ({ onRegister }) => {
  const [formData, setFromData] = useState({});

  const handleChange = (evt) => {
    setFromData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister(formData);
  };

  return (
    <div className="auth-page">
      <form className="form-auth" onSubmit={handleSubmit}>
        <h1 className="form-auth__header">Sign up</h1>
        {/* Needs correcting: For input fields intended for email use the appropriate type: type = "email".
         You can read about other types of input here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input*/}
        <input
          name="email"
          type="text"
          className="form-auth_input"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <input
          name="password"
          /* Needs correcting: For input fields intended for password use the appropriate type: type = "password".
         You can read about other types of input here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input*/
          type="text"
          className="form-auth_input"
          placeholder="Enter password"
          onChange={handleChange}
          minlength={6}
          maxlength={20}
          required
        />
        <button type="submit" className="form-auth_submit">
          Sign up
        </button>
        <p className="auth-page_link">
          Already a member?
          <a href="/signin">Log in</a>
        </p>
      </form>
    </div>
  );
  // Can be improved: When we are working with registration forms, it is a good praction to return some feedback to the user about the registration process. Sometimes a little message like "Registration successful" or "Registration failed" can be very helpful. A snackbar or a toast message can be a good solution for this. You can read more about snackbar here: https://material-ui.com/components/snackbars/
};

export default RegisterPage;
