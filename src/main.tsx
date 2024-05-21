import ReactDOM from 'react-dom/client';
import App from './App.tsx'
import { Router } from './routes/Router.tsx';
import { AsgardeoProvider } from '../../../web-ui-sdks/packages/react/src';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <AsgardeoProvider config={{
      baseUrl: "https://dev.api.asgardeo.io/t/pinterestsample",
      clientID: "gqtroUbA1QsulqrAhD2ID_NNnbsa",
      scope: ["openid", "internal_login", "profile"],
      signInRedirectURL: "https://localhost:5173",
    }}>
      <Router />
    </AsgardeoProvider>
)
