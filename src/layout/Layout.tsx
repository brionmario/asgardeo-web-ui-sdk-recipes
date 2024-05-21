import Navbar from "./Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;