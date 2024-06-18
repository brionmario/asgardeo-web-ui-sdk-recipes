/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import {Hooks, SignIn, useOn} from '@asgardeo/react';
import {FC, ReactElement, useState} from 'react';
import {NavigateFunction, useNavigate} from 'react-router-dom';
import Footer from './Footer';
import './sign-in-button.scss';

export type SignInButtonProps = {};

const SignInButton: FC<SignInButtonProps> = (): ReactElement => {
  const navigate: NavigateFunction = useNavigate();

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const openModal = (): void => {
    setModalVisible(true);
  };

  const closeModal = (): void => {
    setModalVisible(false);
  };

  useOn({
    callback: () => {
      navigate('./home');
    },
    event: Hooks.SignIn,
  });

  return (
    <div className="asgardeo">
      <button type="button" className="navbar__button login-btn" onClick={openModal}>
        Sign In
      </button>

      {modalVisible && (
        <div className="popup-box">
          <button type="button" className="close-button" onClick={closeModal}>
            X
          </button>
          <SignIn
            showFooter={false}
            brandingProps={{
              locale: 'fr-FR',
              preference: {
                text: {
                  'en-US': {
                    common: {
                      'multiple.options.prefix': 'Continue with',
                    },
                    login: {
                      'enter.your.password': 'Password',
                    },
                  },
                },
              },
            }}
          />

          <Footer />
        </div>
      )}

      {modalVisible && <div className="popup-box-overlay" onClick={closeModal} />}
    </div>
  );
};

export default SignInButton;
