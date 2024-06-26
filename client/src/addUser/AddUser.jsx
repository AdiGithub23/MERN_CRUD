import React, { useState } from 'react'
import './AddUser.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from "react-hot-toast";

const AddUser = () => {

  const users = {
    name: "",
    email: "",
    address: "",
  };

  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    // console.log(name, ": ", value);

    // const userCopy = { ...user }; // creates a new object with all the properties & values of the user object(previous)
    // console.log(userCopy);

    setUser({ ...user, [name]: value }); 
    // const updatedUser = { ...user, [name]: value };
    // console.log(updatedUser);
  };

  const submitForm = async (e) => {
    e.preventDefault();             // prevents from reloading the page
    await axios
      .post("http://localhost:8000/api/user", user)
      .then((response) => {
        toast.success(response.data.message, { position: "top-right" });
        navigate("/");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="addUser">
      <Link to="/" type="button" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i> Back
      </Link>

      <h3>Add New User</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={inputHandler}
            name="name"
            autoComplete="off"
            placeholder="Enter your Name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            onChange={inputHandler}
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            onChange={inputHandler}
            name="address"
            autoComplete="off"
            placeholder="Enter your Address"
          />
        </div>
        <div className="inputGroup">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddUser