import * as SC from '../../components/Appbar/Appbar.styled';

export const Home = () => {
  return (
    <div>
      <h2>This is Home-page</h2>
      <SC.NavItem to="/contacts">
        <span>Contacts</span>
      </SC.NavItem>
    </div>
  );
};
