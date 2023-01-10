import { Appbar } from 'components/Appbar/Appbar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <Appbar />
      <Outlet />
    </div>
  );
};
