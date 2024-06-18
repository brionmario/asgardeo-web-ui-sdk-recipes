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

import {useAuthentication} from '@asgardeo/react';
import {FC, ReactElement} from 'react';
import Layout from '../layout/Layout';
import './home-page.scss';

export type HomePageProps = {};

const HomePage: FC<HomePageProps> = (): ReactElement => {
  const {user} = useAuthentication();

  return (
    <Layout>
      <div className="home-page">
        <div className="welcome-text">Welcome, {user?.name?.givenName ?? 'User'} !</div>
        <div className="content" />
      </div>
    </Layout>
  );
};

export default HomePage;
