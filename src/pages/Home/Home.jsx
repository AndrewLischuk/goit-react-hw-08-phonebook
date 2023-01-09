import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUserData } from 'redux/selectors';
import * as SC from '../../components/Appbar/Appbar.styled';
import styles from './Home.module.css';

export const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUserData);

  return (
    <div className={styles.home}>
      {isLoggedIn ? (
        <div>
          <p>
            {user.name} <br /> <span>{user.email}</span>
          </p>
        </div>
      ) : (
        <span>You need to log in first</span>
      )}
      <SC.NavItem to="/contacts">
        <span>Contacts</span>
      </SC.NavItem>
    </div>
  );
};
