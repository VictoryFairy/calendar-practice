import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <LayoutStyle>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutStyle>
  );
}
const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 500px;
  margin: 0 auto;

  main {
    padding: 0 20px;
    width: 100%;
  }
`;

export default Layout;
