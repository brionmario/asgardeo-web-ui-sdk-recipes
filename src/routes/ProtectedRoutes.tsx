import { Outlet, Navigate } from "react-router-dom";
import { useAuthentication } from '../../../../web-ui-sdks/packages/react/src'

export const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuthentication();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};