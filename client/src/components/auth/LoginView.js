import React, { useState } from "react";
import { FormTemplate } from "mui-rff-template";
import { Grid, Card, CardContent, CardHeader } from "@material-ui/core";

import { validationSchema, initialValues, data } from "../forms/LoginForm.js";
import { Link } from "react-router-dom";

const LoginView = (props) => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const login = async (data) => {
    await props.loginUser(data);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.id]: event.target.value });
  };

  return (
    <Grid container justify="center" direction="column" alignItems="center">
      <Card style={{ width: "60%" }}>
        <CardHeader title="Login"></CardHeader>

        <CardContent>
          <FormTemplate
            handleSubmit={login}
            data={data}
            cancel={false}
            initialValues={initialValues}
            validationSchema={validationSchema}
            submitButtonLabel="Login"
          />

          <br></br>
          <div>
            <Link to="/register">Need an account?</Link>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default LoginView;
