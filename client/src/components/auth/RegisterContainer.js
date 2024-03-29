import React, { Component } from "react";
import { registerUser } from "../../actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RegisterView from "./RegisterView";

class RegisterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    };
  }

  componentDidMount() {
    const { auth, history } = this.props;

    if (auth.isAuthenticated) {
      history.push("/dashboard");
    }
  }

  registerUser = (data) => {
    this.props.registerUser(data, this.props.history);
  };

  componentDidUpdate(prevProps, prevState) {
    const { auth, history } = this.props;

    if (auth.isAuthenticated) {
      history.push("/dashboard");
    }
  }

  render() {
    return (
      <RegisterView
        errors={this.props.errors}
        registerUser={this.registerUser}
      />
    );
  }
}

RegisterContainer.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(RegisterContainer);
