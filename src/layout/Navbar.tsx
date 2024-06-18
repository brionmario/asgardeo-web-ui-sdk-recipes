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

/* eslint-disable jsx-a11y/anchor-is-valid */

import {Hooks, SignOutButton, SignedIn, SignedOut, useOn} from '@asgardeo/react';
import {FC} from 'react';
import {NavigateFunction, useNavigate} from 'react-router-dom';
import SignInButton from './SignInButton';
import pinterestLogo from '../assets/Pinterest-logo.png';
import './navbar.scss';

export type NavbarProps = {};

const Navbar: FC<NavbarProps> = () => {
  const navigate: NavigateFunction = useNavigate();

  useOn({
    callback: () => {
      navigate('../');
      window.location.reload();
    },
    event: Hooks.SignOut,
  });

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img src={pinterestLogo} alt="Pinterest Logo" className="navbar__logo" />
        <div className="interest">Interest</div>
        <a href="#" className="navbar__link">
          Watch
        </a>
        <a href="#" className="navbar__link">
          Explore
        </a>
      </div>
      <div className="navbar__right">
        <a href="#" className="navbar__link">
          About
        </a>
        <a href="#" className="navbar__link">
          Business
        </a>
        <a href="#" className="navbar__link">
          Blog
        </a>
        <SignedOut>
          <SignInButton />
          <button type="button" className="navbar__button">
            Sign Up
          </button>
        </SignedOut>
        <SignedIn>
          <SignOutButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
