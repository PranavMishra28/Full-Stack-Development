import React from "react";

function App() {
  const date = new Date();
  const time = date.getHours();
  let greeting = "";
  let color = "";
  if (time < 12) {
    greeting = "Good Morning";
    color = "red";
  } else if (time >= 12 && time < 18) {
    greeting = "Good Afternoon";
    color = "green";
  } else {
    greeting = "Good Evening";
    color = "blue";
  }
  return (
    <>
      <h1 className="heading" style={{ color: color }}>
        {greeting}
      </h1>
    </>
  );
}

export default App;
