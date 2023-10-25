import styled from "@emotion/styled";


export const Main = styled.div`
  top: 0;
  left: 0;
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
  background-color: #E1E3E9;
`;
export const Form = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 15px 0;
  text-transform: uppercase;
`;

export const Input = styled.input`
padding: 8px 16px; 
  width: 250px;
  border-radius: 3px;
  font: inherit;

  outline: none;
  border: none;
  border-radius: 4px;
  `;

  export const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: orangered;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 4px;

  transform: scale(1);
  transition: transform 200ms;

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;
