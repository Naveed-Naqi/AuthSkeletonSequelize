import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Grid, Card, CardHeader, CardContent } from "@material-ui/core";
import {
  validationSchema,
  initialValues,
  data,
} from "../forms/RegisterForm.js";
import { FormTemplate } from "mui-rff-template";

const RegisterView = (props) => {
  const register = (data) => {
    props.registerUser(data);
  };

  return (
    <Grid container justify="center" direction="column" alignItems="center">
      <Card style={{ width: "60%" }}>
        <CardHeader title="Register"></CardHeader>

        <CardContent>
          <FormTemplate
            handleSubmit={register}
            data={data}
            cancel={false}
            initialValues={initialValues}
            validationSchema={validationSchema}
            submitButtonLabel="Register"
          />

          <br></br>
          <div>
            <Link to="/">Already have an account?</Link>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default RegisterView;
