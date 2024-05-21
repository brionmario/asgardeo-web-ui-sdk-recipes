import { useAuthentication } from '../../../../web-ui-sdks/packages/react/src'
import Layout from '../layout/Layout';
import "./home-page.scss";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const { user } = useAuthentication();
  const navigate = useNavigate();
  console.log(user);
  return (
      <div className="home-page">
        <div className='content'/>
      </div>
  );
};

export default HomePage;