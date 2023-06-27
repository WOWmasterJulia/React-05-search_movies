import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
`;

export const Profile = styled.li`
display: block;
text-align: center;
background-color: white;
opacity: 0.95;
`
export const ProfilePhoto = styled.img`
margin-left: auto;
margin-right: auto;
`
export const NameTitle = styled.h5`
margin-top: 10px;
  margin-bottom: 0;
`;

export const Actor = styled.p`
  margin-top: 0;
  font-size: 16px;
`;