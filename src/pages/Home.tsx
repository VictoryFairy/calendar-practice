import styled from "styled-components";
import { typography } from "../style/typography";

const Home = () => {
  return (
    <HomeStyle>
      <span>홈</span>
    </HomeStyle>
  );
};
const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--green-500);
  ${typography.headline};
`;

export default Home;
