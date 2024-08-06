import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyle>
      <h1>Headㅇer2</h1>
    </HeaderStyle>
  );
};
const HeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: pink;
  width: 100%;
`;

export default Header;
