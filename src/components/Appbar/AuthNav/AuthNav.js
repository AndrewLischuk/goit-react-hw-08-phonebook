import * as SC from '../Appbar.styled';
import styles from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={styles.auth}>
      <SC.NavItem to="registration">
        <span>Registration</span>
      </SC.NavItem>
      <SC.NavItem to="login">
        <span>Login</span>
      </SC.NavItem>
    </div>
  );
};
