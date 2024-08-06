import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <h1>Footer</h1>
    </FooterStyle>
  );
};
const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: coral;
  width: 100%;
`;

export default Footer;
