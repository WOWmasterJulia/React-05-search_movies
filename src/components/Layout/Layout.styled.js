import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
    gap: 12px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transform: scale(1);
  transition: transform 200ms;

  &:hover,
  &:focus {
    transform: scale(1.03);
  }

  &.active {
    color: white;
    background-color: orangered;
  }
`;