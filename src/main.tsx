import ReactDOM from "react-dom/client";
import { Router } from "./routes/Router.tsx";
import { AsgardeoProvider } from "../../../web-ui-sdks/packages/react/src/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AsgardeoProvider
    config={{
      clientID: "gqtroUbA1QsulqrAhD2ID_NNnbsa",
      baseUrl: "https://dev.api.asgardeo.io/t/pinterestsample",
      scope: ["openid", "internal_login", "profile"],
      signInRedirectURL: "https://localhost:5173",
    }}
  >
    <Router />
  </AsgardeoProvider>
);
