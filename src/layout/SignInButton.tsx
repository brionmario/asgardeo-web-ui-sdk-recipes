import { ReactElement, useState } from "react";
import "./sign-in-button.scss";
import { SignIn } from "../../../../web-ui-sdks/packages/react/src";
import Footer from "./Footer";

const SignInButton = (): ReactElement => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const openModal = (): void => {
    setModalVisible(true);
  };

  const closeModal = (): void => {
    setModalVisible(false);
  };

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
          
          <SignIn showFooter={false} brandingProps={{
            preference: {
              text: {
                'en-US': {
                  common: {
                    "multiple.options.prefix": "Continue with"
                  },
                  login: {
                    "enter.your.password": "password"
                  }
                }
              }
            }
          }}/>
          <Footer />
        </div>
      )}

      {modalVisible && (
        <div className="popup-box-overlay" onClick={closeModal} />
      )}
    </div>
  );
};

export default SignInButton;
