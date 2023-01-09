import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors';

export const PublicRoute = ({
  component: Component,
  redirectTo = '/',
  restricted = false,
}) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

// export const PublicRoute = ({
//   children,
//   redirectTo = '/',
//   restricted = false,
//   ...routerProps
// }) => {
//   const isLoggedIn = useSelector(getIsLoggedIn);
//   const shouldRedirect = isLoggedIn && restricted;
//   return (
//     <Route {...routerProps}>
//       {shouldRedirect ? <Navigate to={redirectTo} /> : children}
//     </Route>
//   );
// };
