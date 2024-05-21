import { ReactElement, useState } from "react";
import "./sign-in-button.scss";

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
          
        </div>
      )}

      {modalVisible && (
        <div className="popup-box-overlay" onClick={closeModal} />
      )}
    </div>
  );
};

export default SignInButton;