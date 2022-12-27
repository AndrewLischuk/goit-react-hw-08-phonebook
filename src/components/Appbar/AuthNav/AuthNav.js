import * as SC from '../Appbar.styled';

export const AuthNav = () => {
  return (
    <>
      <SC.NavItem to="registration">
        <span>Registration</span>
      </SC.NavItem>
      <SC.NavItem to="login">
        <span>Login</span>
      </SC.NavItem>
    </>
  );
};
