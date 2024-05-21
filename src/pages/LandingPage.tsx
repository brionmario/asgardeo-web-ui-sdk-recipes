import { Navigate, useNavigate } from "react-router-dom";
import "./landing-page.scss";
import Layout from "../layout/Layout";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout>
        <div className="middle-title">
        <div className="middle-title-1">Get your next</div>
        <div className="middle-title-2">home decor idea</div>
        </div>
      <div className="landing-tile-container">
      {Array.from({ length: 14 }).map((_, index) => (
          <div key={index} className="tile"></div>
        ))}

<div className="bottom-shade-bar">
        </div>


        <div className="bottom-bar">
            <div className="bottom-bar-title"> Here's how it works </div>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
