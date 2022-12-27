import { AuthNav } from './AuthNav/AuthNav';
import * as SC from './Appbar.styled';
import { UserMenu } from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';

export const Appbar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <SC.Header>
      <SC.NavItem to="/">
        <span>Home</span>
      </SC.NavItem>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </SC.Header>
  );
};
