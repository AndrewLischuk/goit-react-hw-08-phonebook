import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  background-color: rgba(1, 1, 1, 0.8);
  padding: 5px 0;
  padding-left: 20px;
  border-bottom: 3px solid #ff6b0a;
  z-index: 30;
  box-shadow: 0px 2px 4px -1px rgba(255, 108, 10, 0.6),
    0px 4px 5px 0px rgba(255, 108, 10, 0.4),
    0px 1px 10px 0px rgba(255, 108, 10, 0.3);
`;

export const NavItem = styled(NavLink)`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 34px;
  margin: 5px;
  padding: 10px;
  text-decoration: none;
  text-align: center;
  background-color: #f4eeee;
  color: #010101;
  border: 3px solid transparent;
  border-radius: 5px;
  outline: none;

  &:hover {
    border: 3px solid #ff6b0a;
  }
  &.active {
    color: #ff6b0a;
  }
`;
