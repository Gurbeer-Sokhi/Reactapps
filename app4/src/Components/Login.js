import React from "react";

export default function Login() {
  const handlesubmit = (e) => {
    alert(
      `Username: ${e.target.parentElement[0].value} Password: ${e.target.parentElement[1].value}`
    );
  };

  return (
    <div>
      <form>
        <input
          type="text"
          id="username"
          className="username"
          autoComplete="Name"
        ></input>
        <input type="password" id="password" className="password"></input>
        <button
          id="Submit"
          className="Submit"
          onClick={(e) => {
            e.preventDefault();
            handlesubmit(e);
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
