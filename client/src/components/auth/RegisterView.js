import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import isEmpty from "is-empty";
import { Link } from "react-router-dom";

const RegisterView = props => {
  const [state, setState] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const registerUser = event => {
    event.preventDefault();
    props.registerUser(state);
  };

  const handleChange = event => {
    setState({ ...state, [event.target.id]: event.target.value });
  };

  return (
    <div>
      <form onSubmit={registerUser} autoComplete="off">
        <div>
          <TextField
            value={state.email}
            error={!isEmpty(props.errors.email)}
            helperText={props.errors.email}
            onChange={handleChange}
            id="email"
            label="Email"
            variant="outlined"
          />
        </div>
        <br></br>
        <div>
          <TextField
            value={state.username}
            error={
              !isEmpty(props.errors.registerUsername) ||
              !isEmpty(props.errors.userFound)
            }
            helperText={props.errors.registerUsername || props.errors.userFound}
            onChange={handleChange}
            id="username"
            label="Username"
            variant="outlined"
          />
        </div>
        <br></br>
        <div>
          <TextField
            value={state.password}
            error={!isEmpty(props.errors.registerPassword)}
            helperText={props.errors.registerPassword}
            onChange={handleChange}
            id="password"
            type="password"
            label="Password"
            variant="outlined"
          />
        </div>
        <br></br>
        <div>
          <TextField
            value={state.confirmPassword}
            error={!isEmpty(props.errors.confirmPassword)}
            helperText={props.errors.confirmPassword}
            onChange={handleChange}
            id="confirmPassword"
            type="password"
            label="Confirm Password"
            variant="outlined"
          />
        </div>
        <br></br>
        <div>
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </div>
        <br></br>
        <div>
          <Link to="/">Want to login instead?</Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterView;
