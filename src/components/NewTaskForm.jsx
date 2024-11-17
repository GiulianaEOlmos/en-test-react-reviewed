import { useState } from "react";

const NewTaskForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(inputValue, () => setInputValue(""));
  };

  return (
    // Can be better: This wrapper is superfluous.
    // I advise you to refer to the documentation for examples of using fragments: https://reactjs.org/docs/fragments.html
    <>
      <form className="todolist-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todolist-form_input"
          placeholder="Enter task text"
          onChange={handleInputChange}
          // Needs correcting: In this case, we want to clean the value of the input field after submitting the form. To do this, we need to set the value of the input field to the inputValue state. You can read more about controlled components here: https://reactjs.org/docs/forms.html#controlled-components
        />
        <button type="submit" className="todolist-form_submit">
          Add
        </button>
      </form>
    </>
  );
};

export default NewTaskForm;
