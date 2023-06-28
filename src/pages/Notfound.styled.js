import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const NFContainer = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  padding: 0 20px;
  margin: 20px auto 0;
`;

export const Links = styled(NavLink)`
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  color: blue;
  font-weight: 500;
  :hover {
    text-transform: uppercase;
    text-decoration: dashed;
  }
`;