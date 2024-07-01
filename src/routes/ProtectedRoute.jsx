import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../context/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { token, role } = useContext(authContext);
  const isAllowed = allowedRoles.includes(role);
  const accesibleRoute = token && isAllowed ? children : <Navigate to="/login" replace={true} />;

  return accesibleRoute;
};

export default ProtectedRoute;
