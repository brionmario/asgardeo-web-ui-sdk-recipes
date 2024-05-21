import React, { ReactElement, useState } from "react";
import {
  Hooks,
  SignIn,
  useOn,
  SignedOut,
  SignOutButton,
  SignedIn
} from "../../../../web-ui-sdks/packages/react/src";
import "./sign-in-button.scss";

const SignInButton = (): ReactElement => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const openModal = (): void => {
    setModalVisible(true);
  };

  const closeModal = (): void => {
    setModalVisible(false);
  };

  const func = () => {
    console.log("func works new");
  }

  useOn({
    event: Hooks.SignIn,
    callback: func,
  });

  useOn({
    event: Hooks.SignOut,
    callback: () => {window.location.reload()},
  });

  return (
    <div className="asgardeo">
      <button className="navbar__button login-btn" onClick={openModal}>
        Sign In
      </button>

      {modalVisible && (
        <div className="popup-box">
          <button className="close-button" onClick={closeModal}>
            X
          </button>
          <SignIn
            showFooter={false}
            brandingProps={{
              preference: {
                text: {
                  "en-US": {
                    common: {
                      "multiple.options.prefix": "Continue with",
                    },
                    login: {
                      username: "Email",
                      "enter.your.username": "Email",
                      "enter.your.password": "Password",
                    },
                  },
                },
              },
            }}
          />
          <div className="footer">
            By continuing, you agree to Interest's
            <br />
            <a href="#">Terms of Service</a> and acknowledge you've read our
            <br />
            <a href="#">Privacy Policy. </a>
            <a href="#s">Notice at collection.</a>
          </div>

          <div className="divider" />

          <div className="footer footer-bottom">
            <a href="#">Not on Interest yet? Sign up </a>
            <br />
            <span className="business-text"> Are you a business? </span>
            <a href="#">Get started here!</a>
          </div>
          <SignedIn><SignOutButton /></SignedIn>
        </div>
      )}

      {modalVisible && (
        <div className="popup-box-overlay" onClick={closeModal} />
      )}
    </div>
  );
};

export default SignInButton;
