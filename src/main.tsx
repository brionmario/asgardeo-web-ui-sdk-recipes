import ReactDOM from 'react-dom/client';
import {AsgardeoProvider, UIAuthConfig} from '../../../web-ui-sdks/packages/react/src'
import App from './App.tsx'
import { Router } from './routes/Router.tsx';

const config: UIAuthConfig = {
  baseUrl: "https://localhost:9443",
  clientID: "b1uRjwpqydvxjGR42Y6BnIdQMRMa",
  scope: ["openid", "internal_login", "profile"],
  signInRedirectURL: "https://localhost:5173",
};

const identityServerConfig: UIAuthConfig = {
  baseUrl: "https://localhost:9443",
  clientID: "0V9psfPgVua0Qex2424gJNrtUOoa",
  scope: ["openid", "internal_login", "profile"],
  signInRedirectURL: "https://localhost:5173",
};

const devConfig: UIAuthConfig = {
  baseUrl: "https://dev.api.asgardeo.io/t/movinorg",
  clientID: "kH5OfXOvpGLOvp1iAw4zQmNvv4oa",
  scope: ["openid", "internal_login", "profile"],
  signInRedirectURL: "https://localhost:5173",
};

const interestConfig: UIAuthConfig = {
  baseUrl: "https://dev.api.asgardeo.io/t/pinterestsample",
  clientID: "gqtroUbA1QsulqrAhD2ID_NNnbsa",
  scope: ["openid", "internal_login", "profile"],
  signInRedirectURL: "https://localhost:5173",
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AsgardeoProvider config={interestConfig}>
    <Router />
  </AsgardeoProvider>
)
