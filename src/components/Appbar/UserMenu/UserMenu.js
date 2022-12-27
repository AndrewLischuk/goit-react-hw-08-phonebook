import { useDispatch } from 'react-redux';
import { userLogOut } from 'redux/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <>
      <span>User is logged in</span>
      <button type="button" onClick={() => dispatch(userLogOut())}>
        Log Out
      </button>
    </>
  );
};
