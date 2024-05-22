import Layout from "../layout/Layout";
import "./home-page.scss";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="home-page">
        <div className="welcome-text">Welcome, user !</div>

        <div className="content" />
      </div>
    </Layout>
  );
};

export default HomePage;
