import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Container = styled.section`
  padding: 20px;
  background-color: #fff;
  
`;

export const ListOfFilm = styled.ul`
  // display: flex;
  // flex-direction: column;
  // gap: 35px;
  margin-bottom: 15px;
  /* padding-inline-start: 20px; */
  
`;

export const MoviesTitle = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  /* border-bottom: 1px solid black;
  text-decoration: none; */
  /* > a {
    text-decoration: none;
  } */
  /* :hover {
    border-bottom: 2px solid blue;
  } */
`;

export const Link = styled(NavLink)`
  /* text-decoration-color: tomato; */
  text-decoration: none; 
  color: black;
  
  /* > a {
    text-decoration: none;
    
  } */
  :hover {
    color: orangered;
    text-decoration-color: orangered;
    border-bottom: 1px solid blue;
  } 
   /* font-weight: 500;  */


  /* &.active {
    color: orangered;
    text-decoration-color: tomato;
    text-decoration: orangered;
    border: 1px solid blue;
  } */
`;