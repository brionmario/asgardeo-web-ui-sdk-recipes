import { ReactElement, useState } from "react";
import "./sign-in-button.scss";
import { Hooks, SignIn, useOn } from "../../../../web-ui-sdks/packages/react/src";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const SignInButton = (): ReactElement => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const openModal = (): void => {
    setModalVisible(true);
  };

  const closeModal = (): void => {
    setModalVisible(false);
  };

  const navigate = useNavigate();

  useOn({
    event: Hooks.SignIn,
    callback: () => {
      console.log('home')
      navigate('./home')
    }
  })

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
            locale: 'fr-FR',
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
