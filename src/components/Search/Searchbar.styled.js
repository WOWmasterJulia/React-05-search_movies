import styled from "@emotion/styled";


export const Main = styled.div`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
    background-color: #3f51b5;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const Form = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 15px 0;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 5px;  
  width: 250px;
  border-radius: 3px;
  font: inherit;

  outline: none;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 0px 4px 1px rgba(5, 131, 131, 0.6);
  transition: box-shadow 200ms;

&:hover,
  &:focus,
  &:active {
    box-shadow: 0px 0px 7px 6px rgba(5, 131, 131, 0.24);}
  `;

  export const Button = styled.button`
  align-self: start;
  padding: 5px 20px;
  margin-left: 10px;
  

  background-color: teal;
  border: none;
  outline: none;
  color: aliceblue;
  border-radius: 5px;

  transform: scale(1);
  transition: transform 200ms;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
