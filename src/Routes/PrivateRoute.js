import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/login',
}) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

// export const PrivateRoute = ({
//   children,
//   redirectTo = '/login',
//   ...routeProps
// }) => {
//   const isLoggedIn = useSelector(getIsLoggedIn);
//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Navigate to={redirectTo} />}
//     </Route>
//   );
// };
