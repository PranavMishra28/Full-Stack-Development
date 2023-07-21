import React, { useState } from "react";

// The useState hook is used to define a state variable called contact and its corresponding setter function setContact. The initial state of contact is an object with three empty string properties: fName, lName, and email. These properties will hold the user's input in the form.

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  // The handleChange function is responsible for updating the contact state as the user interacts with the form. It is called whenever there is a change event on any of the input fields.

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>Your email is: {contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
