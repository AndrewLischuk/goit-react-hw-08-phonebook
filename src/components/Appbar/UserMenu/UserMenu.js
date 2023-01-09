import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from 'redux/authOperations/authOperations';
import { getUserData } from 'redux/selectors';
import styles from '../AuthNav/AuthNav.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(getUserData);

  return (
    <div className={styles.userMenu}>
      <span>Wellcome, {user.name}</span>
      <button
        className={styles.userLogoutBtn}
        type="button"
        onClick={() => dispatch(userLogOut())}
      >
        Log Out
      </button>
    </div>
  );
};
