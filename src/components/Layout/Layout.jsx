import { Appbar } from 'components/Appbar/Appbar';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Appbar />
      <Outlet />
    </div>
  );
};
