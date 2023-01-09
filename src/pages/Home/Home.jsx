import { Container } from 'components/Container/Container';
import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUserData } from 'redux/selectors';
import * as SC from '../../components/Appbar/Appbar.styled';
import styles from './Home.module.css';

export const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUserData);

  return (
    <div className={styles.home}>
      {/* <h2>This is Home-page</h2> */}
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
