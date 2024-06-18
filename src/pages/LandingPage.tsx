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

/* eslint-disable react/no-array-index-key */

import {FC, ReactElement} from 'react';
import Layout from '../layout/Layout';
import './landing-page.scss';

export type LandingPageProps = {};

const LandingPage: FC<LandingPageProps> = (): ReactElement => (
  <Layout>
    <div className="middle-title">
      <div className="middle-title-1">Get your next</div>
      <div className="middle-title-2">home decor idea</div>
    </div>
    <div className="landing-tile-container">
      {Array.from({length: 14}).map((_: unknown, index: number) => (
        <div key={index} className="tile" />
      ))}

      <div className="bottom-shade-bar" />

      <div className="bottom-bar">
        <div className="bottom-bar-title"> Here&apos;s how it works </div>
      </div>
    </div>
  </Layout>
);

export default LandingPage;
