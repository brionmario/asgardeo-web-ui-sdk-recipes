import { useAuthentication } from "../../../../web-ui-sdks/packages/react/src";
import Layout from "../layout/Layout";
import "./home-page.scss";

const HomePage: React.FC = () => {
  const { user } = useAuthentication();

  console.log(user);

  return (
    <Layout>
      <div className="home-page">
        <div className="welcome-text">
          Welcome, {user?.name?.givenName ?? "User"} !
        </div>

        <div className="content" />
      </div>
    </Layout>
  );
};

export default HomePage;
