import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const NFContainer = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  padding: 0 20px;
  margin: 50px auto 0;
`;

export const Links = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  min-width: 150px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  background-color: orangered;
  color: #fff;

  transition: transform 350ms cubic-bezier(0.65, 0.05, 0.36, 1),
    color 350ms cubic-bezier(0.65, 0.05, 0.36, 1),
    background-color 350ms cubic-bezier(0.65, 0.05, 0.36, 1);

  &:hover {
    transform: scale(1.03);
    color: orangered;
    background-color: #E1E3E9;
  }

  /* &.active {
    background-color: #E1E3E9;
    color: orangered;

    &:hover {
      transform: scale(1.03);
    } */
  /* } */
`;