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

import {AsgardeoProvider} from '@asgardeo/react';
import ReactDOM from 'react-dom/client';
import {Router} from './routes/Router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AsgardeoProvider
    config={{
      baseUrl: import.meta.env.VITE_ASGARDEO_SERVICES_URL,
      clientID: import.meta.env.VITE_ASGARDEO_CLIENT_ID,
      scope: ['openid', 'internal_login', 'profile'],
      signInRedirectURL: import.meta.env.VITE_ASGARDEO_SIGN_IN_REDIRECT_URL,
      signOutRedirectURL: import.meta.env.VITE_ASGARDEO_SIGN_OUT_REDIRECT_URL,
    }}
  >
    <Router />
  </AsgardeoProvider>,
);
