import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
        console.log(e);
        console.log(e.target.value);
        console.log(e.target.name);
    setFormData(prevFormData => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      alert("Successfully Signed Up");
    } else {
      alert("Passwords do not match");
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <form className="white p-4 m-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="exampleInputPassword1"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            id="exampleInputPassword2"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">I want to join the newsletter</label>
        </div>
        <button type="submit" className="btn purple">Sign up</button>
      </form>
    </div>
  );
}
