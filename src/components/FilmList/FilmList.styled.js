import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.section`
  padding: 20px;
  background-color: #fff;  
`;

export const ListOfFilm = styled.ul`
  margin-bottom: 15px;
`;

export const MoviesTitle = styled.li`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  list-style: circle;
  text-decoration: none; 

  :hover {
    text-decoration: underline;
  } 
  > span {
    font-size: 14px;
  }
`;

export const MyLink = styled(Link)`
  text-decoration: none; 
  color: black;

  :hover {
    color: orangered;
    text-decoration-color: orangered;
  }  
`;